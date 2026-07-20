import { Component, Input } from '@angular/core';
import { FrameColorDirective } from '../../../core/directives/frame-color.directive';
import { ContainerDirective } from '../../../core/directives/container.directive';
export type TitleColor = 'primary' | 'secondary' | 'dark' | 'light';
export type ImagePosition = "left" | "right";
export type BackgroundColor = "bg-primary" | "bg-secondary" | ""
@Component({
  selector: 'app-sided-image-text',
  imports: [FrameColorDirective, ContainerDirective],
  templateUrl: './sided-image-text.html',
  styleUrl: './sided-image-text.scss',
})
export class SidedImageText {
  @Input() titleColor: TitleColor = "dark"
  @Input() title = "Título"
  @Input() text: string[] = []
  @Input() imgURL = ""
  @Input() alt = "Esto es una imagen"
  @Input() imagePosition = "left"
  @Input() bg: BackgroundColor = ""
 }
