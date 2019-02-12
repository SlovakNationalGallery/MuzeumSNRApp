import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OsobnostiPage } from './osobnosti.page';

describe('OsobnostiPage', () => {
  let component: OsobnostiPage;
  let fixture: ComponentFixture<OsobnostiPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OsobnostiPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OsobnostiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
