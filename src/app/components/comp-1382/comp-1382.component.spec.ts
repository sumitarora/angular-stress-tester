import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1382Component } from './comp-1382.component';

describe('Comp1382Component', () => {
  let component: Comp1382Component;
  let fixture: ComponentFixture<Comp1382Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1382Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1382Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
