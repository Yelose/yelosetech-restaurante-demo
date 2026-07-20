import { Component, Input } from '@angular/core';
import { ContainerDirective } from '../../../core/directives/container.directive';
import { FrameColorDirective } from '../../../core/directives/frame-color.directive';

@Component({
  selector: 'app-two-images-section',
  imports: [ContainerDirective, FrameColorDirective],
  templateUrl: './two-images-section.html',
  styleUrl: './two-images-section.scss',
})
export class TwoImagesSection {
  @Input() title: string = ""
  @Input() text: string[] = []
  @Input() img1: string = ""
  @Input() img1alt: string = ""
  @Input() img2: string = ""
  @Input() img2alt: string = ""
  @Input() blockquote: string[] = []
  @Input() buttonText: string = ""
  @Input() buttonUrl: string = ""
}
