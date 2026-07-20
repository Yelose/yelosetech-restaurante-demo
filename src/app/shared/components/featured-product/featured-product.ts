import { Component, Input } from '@angular/core';
import { FrameColorDirective } from '../../../core/directives/frame-color.directive';

@Component({
  selector: 'app-featured-product',
  imports: [FrameColorDirective],
  templateUrl: './featured-product.html',
  styleUrl: './featured-product.scss',
})
export class FeaturedProduct {
  @Input() image: string = ""
  @Input() name: string = ""
  @Input() description: string[] = []
}
