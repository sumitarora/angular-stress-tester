import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4986Component } from './comp-4986.component';

describe('Comp4986Component', () => {
  let component: Comp4986Component;
  let fixture: ComponentFixture<Comp4986Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4986Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4986Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
