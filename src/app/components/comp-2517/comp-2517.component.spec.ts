import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2517Component } from './comp-2517.component';

describe('Comp2517Component', () => {
  let component: Comp2517Component;
  let fixture: ComponentFixture<Comp2517Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2517Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2517Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
