import { Component, Input } from '@angular/core';
import { LayoutContainerWrapper } from "../../wrappers/layout-container/layout-container.wrapper";
export type TitleColor = 'primary' | 'secondary' | 'dark' | 'light';
export type ImagePosition = "left" | "right";
export type BackgroundColor = "bg-primary" | "bg-secondary" | ""
@Component({
  selector: 'app-sided-image-text',
  imports: [LayoutContainerWrapper],
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
  @Input() imageOrientation: 'vertical' | 'horizontal' = 'horizontal'
 }
