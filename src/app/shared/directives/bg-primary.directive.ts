import { Directive, Input, OnChanges } from '@angular/core';

@Directive({
  selector: '[bg-primary-color]',
  standalone: true,
  host: {
    '[style.display]': '"block"',
    '[style.width]': '"100%"',
    '[style.boxSizing]': '"border-box"',
    '[style.overflow]': '"hidden"',
    '[style.borderRadius]': '"6px"',
    '[style.boxShadow]': '"0 10px 25px rgba(0, 0, 0, 0.08)"',
    '[style.border]': '"8px solid"',
    '[style.borderColor]': 'colorBorde'
  }
})
export class BgPrimaryDirective implements OnChanges {
  @Input('bg-primary-color') bgType: string = '';
  protected colorBorde = 'var(--primary-color)';

  ngOnChanges(): void {
    if (this.bgType && this.bgType.includes('secondary')) {
      this.colorBorde = 'var(--secondary-color)';
    } else {
      this.colorBorde = 'var(--primary-color)';
    }
  }
}