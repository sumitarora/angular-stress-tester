import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3947Component } from './comp-3947.component';

describe('Comp3947Component', () => {
  let component: Comp3947Component;
  let fixture: ComponentFixture<Comp3947Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3947Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3947Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
