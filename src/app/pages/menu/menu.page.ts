import { Component, computed, inject, signal, effect } from '@angular/core';
import { CategoryService } from '../../core/services/category.service';
import { ProductService } from '../../core/services/product.service';
import { LayoutContainerWrapper } from "../../shared/wrappers/layout-container/layout-container.wrapper";

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [LayoutContainerWrapper], 
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss']
})
export class MenuPage {
  private readonly categoryService = inject(CategoryService);
  private readonly productService = inject(ProductService);

  readonly categories = this.categoryService.categories;
  private readonly activeProducts = this.productService.activeProducts;

  readonly selectedCategory = signal<string>('all');
  readonly localCategories = signal<any[]>([]);
  
  // Control reactivo de apertura del desplegable
  readonly isDropdownOpen = signal<boolean>(false);

  private readonly allergenMap: Record<string, { icon: string; bg: string; color: string }> = {
    'LACTEOS': { icon: '🥛', bg: '#eef5fc', color: '#2b6cb0' },
    'FRUTOS CASCARA': { icon: '🌰', bg: '#fff5f2', color: '#c56853' },
    'GLUTEN': { icon: '🌾', bg: '#fefcbf', color: '#b7791f' },
    'PESCADO': { icon: '🐟', bg: '#e0f7fa', color: '#006064' },
    'HUEVOS': { icon: '🥚', bg: '#fff9db', color: '#f59f00' },
    'MOLUSCOS': { icon: '🦪', bg: '#f1f3f5', color: '#495057' },
    'SOJA': { icon: '🌱', bg: '#ebfbee', color: '#2b8a3e' },
    'SESAMO': { icon: '🥯', bg: '#fff4e6', color: '#d9480f' }
  };

  constructor() {
    effect(() => {
      const dbCategories = this.categories();
      if (dbCategories && dbCategories.length > 0 && this.localCategories().length === 0) {
        
        const ORDERED_NAMES = [
          'entrantes',
          'para compartir',
          'especialidades sal y olivo',
          'arroces y pastas',
          'platos principales de la tierra',
          'platos principales del mar',
          'postres'
        ];

        const groups = new Map<string, { id: string; name: string; rawIds: string[] }>();
        
        dbCategories.forEach(cat => {
          if (!cat['name']) return;
          const nameNorm = cat['name'].toLowerCase().trim();
          
          if (!groups.has(nameNorm)) {
            const lowercaseWords = ['y', 'de', 'del', 'la', 'con', 'para', 'el', 'los', 'las'];
            const capitalizedName = cat['name']
              .trim()
              .split(/\s+/)
              .map((word: string, index: number) => {
                const lower = word.toLowerCase();
                if (index > 0 && lowercaseWords.includes(lower)) {
                  return lower;
                }
                return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
              })
              .join(' ');

            groups.set(nameNorm, {
              id: nameNorm, 
              name: capitalizedName,
              rawIds: [cat['id']] 
            });
          } else {
            groups.get(nameNorm)!.rawIds.push(cat['id']);
          }
        });

        const sortedCategories = Array.from(groups.values()).sort((a, b) => {
          const indexA = ORDERED_NAMES.indexOf(a.id);
          const indexB = ORDERED_NAMES.indexOf(b.id);
          
          if (indexA !== -1 && indexB !== -1) return indexA - indexB;
          if (indexA !== -1) return -1;
          if (indexB !== -1) return 1;
          return a.name.localeCompare(b.name);
        });

        this.localCategories.set(sortedCategories);
      }
    });
  }

  readonly filteredCategories = computed(() => {
    const activeFilter = this.selectedCategory();
    const allCategories = this.localCategories();

    if (activeFilter === 'all') {
      return allCategories;
    }
    return allCategories.filter(cat => cat['id'] === activeFilter);
  });

  readonly selectedCategoryName = computed(() => {
    const activeId = this.selectedCategory();
    if (activeId === 'all') {
      return 'Todos los productos';
    }
    const found = this.localCategories().find(cat => cat['id'] === activeId);
    return found ? found['name'] : 'Elegir categoría';
  });

  getDishesByCategory(category: any) {
    return computed(() => {
      const rawIds = category['rawIds'] || [];
      return this.activeProducts().filter(dish => rawIds.includes(dish['categoryId']));
    });
  }

  // 🚀 FILTRO CON REDIRECCIÓN AL INICIO REAL (Calculado desde TS)
  selectCategory(categoryId: string): void {
    this.selectedCategory.set(categoryId);
    this.isDropdownOpen.set(false);

    setTimeout(() => {
      const firstCategory = this.localCategories()[0];
      const targetId = (categoryId === 'all' && firstCategory) ? firstCategory['id'] : categoryId;
      const element = document.getElementById(targetId);
      
      if (element) {
        const headerOffset = 150; 
        
        let parent = element.parentElement;
        while (parent && parent !== document.body) {
          const overflowY = window.getComputedStyle(parent).overflowY;
          if (overflowY === 'auto' || overflowY === 'scroll') {
            break;
          }
          parent = parent.parentElement;
        }
        
        const scrollContainer = parent && parent !== document.body ? parent : null;
        
        if (scrollContainer) {
          scrollContainer.scrollTo({
            top: element.offsetTop - headerOffset,
            behavior: 'smooth'
          });
        } else {
          const y = element.getBoundingClientRect().top + window.pageYOffset - headerOffset;
          window.scrollTo({
            top: y,
            behavior: 'smooth'
          });
        }
      }
    }, 100);
  }

  onDropdownToggle(event: Event): void {
    const details = event.target as HTMLDetailsElement;
    this.isDropdownOpen.set(details.open);
  }

  getAllergenData(allergen: string) {
    const key = allergen.toUpperCase().trim();
    return this.allergenMap[key] || { icon: '⚠️', bg: '#f4f4f4', color: '#555555' };
  }
}