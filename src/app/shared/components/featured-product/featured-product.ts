import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-featured-product',
  imports: [],
  templateUrl: './featured-product.html',
  styleUrl: './featured-product.scss',
})
export class FeaturedProduct {
  @Input() image: string = ""
  @Input() name: string = ""
  @Input() description: string[] = []
}
