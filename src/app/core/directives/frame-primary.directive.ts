import { Directive, ElementRef, Input, OnInit, OnChanges, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appFrame]',
  standalone: true
})
export class FrameDirective implements OnInit, OnChanges {
  @Input() appFrame: 'primary' | 'secondary' | '' = 'primary';
  @Input() makeHorizontal: boolean = false;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit(): void {
    this.applyStyles();
  }

  ngOnChanges(): void {
    this.applyStyles();
  }

  private applyStyles(): void {
    const element = this.el.nativeElement;

    // 1. Forzar comportamiento de bloque contenedor e impedir desbordes
    this.renderer.setStyle(element, 'display', 'block');
    this.renderer.setStyle(element, 'overflow', 'hidden');
    this.renderer.setStyle(element, 'border-radius', '6px');
    this.renderer.setStyle(element, 'border-style', 'solid');
    this.renderer.setStyle(element, 'border-width', '4px');

    // 2. Control Estricto de Tamaños en Píxeles (Evita fotos gigantes/diminutas)
    if (this.makeHorizontal) {
      this.renderer.setStyle(element, 'width', '450px');
      this.renderer.setStyle(element, 'height', '300px');
    } else {
      this.renderer.setStyle(element, 'width', '300px');
      this.renderer.setStyle(element, 'height', '450px');
    }

    // 3. Control de Color del Marco
    if (this.appFrame === 'secondary') {
      this.renderer.setStyle(element, 'border-color', 'var(--secondary-color)');
    } else {
      this.renderer.setStyle(element, 'border-color', 'var(--primary-color)');
    }
  }
}