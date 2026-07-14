import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturedProduct } from './featured-product';

describe('FeaturedProduct', () => {
  let component: FeaturedProduct;
  let fixture: ComponentFixture<FeaturedProduct>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeaturedProduct]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeaturedProduct);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
