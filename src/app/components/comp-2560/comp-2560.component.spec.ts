import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2560Component } from './comp-2560.component';

describe('Comp2560Component', () => {
  let component: Comp2560Component;
  let fixture: ComponentFixture<Comp2560Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2560Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2560Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
