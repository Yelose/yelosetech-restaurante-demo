import { computed, Directive, input } from '@angular/core';

@Directive({
  selector: '[frame]',
  standalone: true, // Asegúrate de tener esto si usas componentes standalone
  host: {
    // ESTILOS VISUALES
    '[style.borderRadius]': '"8px"', 
    '[style.boxShadow]': 'shadowStyle()',
    
    // BORDE Y COLOR
    '[style.border]': '"5px solid"',
    '[style.borderColor]': 'baseColor()'
  }
})
export class FrameColorDirective {
  // Aceptamos '' por si llamas a la directiva solo con <div frame>
  frame = input<'primary' | 'secondary' | ''>('primary');

  // Evaluamos el color reactivamente
  baseColor = computed(() => {
    return this.frame() === 'secondary' 
      ? 'var(--secondary-color)' 
      : 'var(--primary-color)';
  });

  shadowStyle = computed(() => {
    return `2px 2px 10px ${this.baseColor()}`
  })
}