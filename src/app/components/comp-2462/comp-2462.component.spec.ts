import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2462Component } from './comp-2462.component';

describe('Comp2462Component', () => {
  let component: Comp2462Component;
  let fixture: ComponentFixture<Comp2462Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2462Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2462Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
