import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2429Component } from './comp-2429.component';

describe('Comp2429Component', () => {
  let component: Comp2429Component;
  let fixture: ComponentFixture<Comp2429Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2429Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2429Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
