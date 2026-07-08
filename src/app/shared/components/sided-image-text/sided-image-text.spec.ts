import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidedImageText } from './sided-image-text';

describe('SidedImageText', () => {
  let component: SidedImageText;
  let fixture: ComponentFixture<SidedImageText>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SidedImageText]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SidedImageText);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
