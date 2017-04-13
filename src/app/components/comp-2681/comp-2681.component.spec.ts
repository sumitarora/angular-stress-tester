import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2681Component } from './comp-2681.component';

describe('Comp2681Component', () => {
  let component: Comp2681Component;
  let fixture: ComponentFixture<Comp2681Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2681Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2681Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
