import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1185Component } from './comp-1185.component';

describe('Comp1185Component', () => {
  let component: Comp1185Component;
  let fixture: ComponentFixture<Comp1185Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1185Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1185Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
