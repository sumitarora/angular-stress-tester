import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1296Component } from './comp-1296.component';

describe('Comp1296Component', () => {
  let component: Comp1296Component;
  let fixture: ComponentFixture<Comp1296Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1296Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1296Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
