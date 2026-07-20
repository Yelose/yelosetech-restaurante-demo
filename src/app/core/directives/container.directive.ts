import { Directive } from '@angular/core';

@Directive({
  selector: '[container]',
  host: {
    // Es vital mantener el display block y el width 100% para que el centrado 
    // funcione correctamente si se lo aplicas a etiquetas inline o flex.
    '[style.display]': '"flex"',
    '[style.width]': '"100%"',
    '[style.maxWidth]': '"min(90%, var(--max-page-width, 1200px))"',
    '[style.margin]': '"0 auto"'
  }
})
export class ContainerDirective {
}
