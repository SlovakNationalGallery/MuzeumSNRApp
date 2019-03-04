import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatneSymbolyCardsPage } from './statne-symboly-cards.page';

describe('StatneSymbolyCardsPage', () => {
  let component: StatneSymbolyCardsPage;
  let fixture: ComponentFixture<StatneSymbolyCardsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatneSymbolyCardsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatneSymbolyCardsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
