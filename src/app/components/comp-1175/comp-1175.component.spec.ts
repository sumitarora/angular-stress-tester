import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1175Component } from './comp-1175.component';

describe('Comp1175Component', () => {
  let component: Comp1175Component;
  let fixture: ComponentFixture<Comp1175Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1175Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1175Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
