import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MulitpleAnsQPage } from './mulitple-ans-q.page';

describe('MulitpleAnsQPage', () => {
  let component: MulitpleAnsQPage;
  let fixture: ComponentFixture<MulitpleAnsQPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MulitpleAnsQPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MulitpleAnsQPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
