import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { beforeEach, describe, expect, it } from 'vitest';
import { FrameDirective } from '../directives/frame-primary.directive';

// 1. Creamos un componente artificial siguiendo las guías para testear directivas de atributo
@Component({
  standalone: true,
  imports: [FrameDirective],
  template: `
    <picture id="default" appFrame></picture>
    <picture id="secondary" appFrame="secondary"></picture>
    <picture id="horizontal" appFrame [makeHorizontal]="true"></picture>
  `
})
class TestHostComponent {}

describe('FrameDirective', () => {
  let fixture: ComponentFixture<TestHostComponent>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [TestHostComponent, FrameDirective]
    });
    
    fixture = TestBed.createComponent(TestHostComponent);
    await fixture.whenStable(); // Esperamos a que el renderizado inicial sea estable
  });

  it('should create an instance', () => {
    const directive = new FrameDirective();
    expect(directive).toBeTruthy();
  });

  it('should apply primary border color by default', () => {
    const el = fixture.debugElement.query(By.css('#default')).nativeElement as HTMLElement;
    // Comprobamos que el borde se establece y el color tira de la variable primaria
    expect(el.style.border).toContain('8px solid');
    expect(el.style.borderColor).toBe('var(--primary-color)');
  });

  it('should apply secondary border color when specified', () => {
    const el = fixture.debugElement.query(By.css('#secondary')).nativeElement as HTMLElement;
    expect(el.style.borderColor).toBe('var(--secondary-color)');
  });

  it('should apply fixed pixel dimensions when makeHorizontal is true', () => {
    const el = fixture.debugElement.query(By.css('#horizontal')).nativeElement as HTMLElement;
    
    // Verificamos que se ciñe estrictamente a las dimensiones en px requeridas
    expect(el.style.width).toBe('450px');
    expect(el.style.height).toBe('300px');
  });

  it('should reset dimensions to auto when makeHorizontal is false', () => {
    const el = fixture.debugElement.query(By.css('#default')).nativeElement as HTMLElement;
    expect(el.style.width).toBe('auto');
    expect(el.style.height).toBe('auto');
  });
});