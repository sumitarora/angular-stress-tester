import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2669Component } from './comp-2669.component';

describe('Comp2669Component', () => {
  let component: Comp2669Component;
  let fixture: ComponentFixture<Comp2669Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2669Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2669Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
