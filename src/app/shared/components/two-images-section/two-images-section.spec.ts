import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoImagesSection } from './two-images-section';

describe('TwoImagesSection', () => {
  let component: TwoImagesSection;
  let fixture: ComponentFixture<TwoImagesSection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TwoImagesSection]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TwoImagesSection);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
