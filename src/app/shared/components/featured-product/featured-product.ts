import { Component, Input } from '@angular/core';
import { BgPrimaryDirective } from '../../directives/bg-primary.directive';

@Component({
  selector: 'app-featured-product',
  imports: [BgPrimaryDirective],
  templateUrl: './featured-product.html',
  styleUrl: './featured-product.scss',
})
export class FeaturedProduct {
  @Input() image: string = ""
  @Input() name: string = ""
  @Input() description: string[] = []
}
