import { Component, inject } from '@angular/core';
import { ProductService } from '../../core/services/product.service';

@Component({
  selector: 'app-menu',
  imports: [],
  templateUrl: './menu.page.html',
  styleUrl: './menu.page.scss',
})
export class MenuPage {
  private readonly dishesService = inject(ProductService);

  // Exponemos el Signal a la vista
  readonly products = this.dishesService.products;

  // Método para detonar la promesa

}
