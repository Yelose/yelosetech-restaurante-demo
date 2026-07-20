import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutContainerWrapper } from './layout-container.wrapper';

describe('LayoutContainerWrapper', () => {
  let component: LayoutContainerWrapper;
  let fixture: ComponentFixture<LayoutContainerWrapper>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LayoutContainerWrapper]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LayoutContainerWrapper);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
