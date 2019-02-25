import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KalendariumPage } from './kalendarium.page';

describe('KalendariumPage', () => {
  let component: KalendariumPage;
  let fixture: ComponentFixture<KalendariumPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KalendariumPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KalendariumPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
