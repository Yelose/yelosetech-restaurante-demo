import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LegalAdvisePage } from './legal-advise.page';

describe('LegalAdvisePage', () => {
  let component: LegalAdvisePage;
  let fixture: ComponentFixture<LegalAdvisePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LegalAdvisePage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LegalAdvisePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
