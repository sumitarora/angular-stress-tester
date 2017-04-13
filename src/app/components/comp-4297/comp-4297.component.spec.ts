import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4297Component } from './comp-4297.component';

describe('Comp4297Component', () => {
  let component: Comp4297Component;
  let fixture: ComponentFixture<Comp4297Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4297Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4297Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
