import { computed, inject, Injectable } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { Firestore, collection, query, orderBy, collectionData, doc, setDoc, updateDoc } from '@angular/fire/firestore';
import { catchError, of } from 'rxjs';
import { ProductCategory } from '../models/product.model'; 

@Injectable({ providedIn: 'root' })
export class CategoryService {
  private firestore = inject(Firestore);
  private categoriesCollection = collection(this.firestore, 'categories');

  // GET ALL: Tu Signal con todas las categorías
  private categoriesFromFirestore = toSignal(
    collectionData(query(this.categoriesCollection, orderBy('order', 'asc')), { idField: 'id' }).pipe(
      catchError(() => of([]))
    ),
    { initialValue: [] }
  );

  readonly categories = computed(() => this.categoriesFromFirestore());

  // GET: Busca síncronamente en memoria (Cero latencia, cero Firebase query)
  getByName(name: string): ProductCategory {
    const searchName = name.trim().toLowerCase();
    return this.categories().find(c => c['name'].toLowerCase() === searchName) as ProductCategory;
  }

  // CREATE: Síncrono. Genera el ID en el cliente, dispara a Firebase y devuelve el ID al instante.
  createCategory(category: Partial<ProductCategory>): string {
    // doc() sin ID genera una referencia con un ID nuevo al instante
    const newDocRef = doc(this.categoriesCollection); 
    
    // setDoc envía los datos a Firebase (Fire and forget)
    setDoc(newDocRef, category); 
    
    // Devolvemos el ID generado síncronamente para que el producto lo pueda usar YA
    return newDocRef.id; 
  }

  updateCategory(id: string, changes: Partial<ProductCategory>): void {
    const ref = doc(this.firestore, `categories/${id}`);
    updateDoc(ref, changes);
  }
}