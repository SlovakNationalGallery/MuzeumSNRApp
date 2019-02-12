import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DokumentyPage } from './dokumenty.page';

describe('DokumentyPage', () => {
  let component: DokumentyPage;
  let fixture: ComponentFixture<DokumentyPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DokumentyPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DokumentyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
