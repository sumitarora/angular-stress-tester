import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3537Component } from './comp-3537.component';

describe('Comp3537Component', () => {
  let component: Comp3537Component;
  let fixture: ComponentFixture<Comp3537Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3537Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3537Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
