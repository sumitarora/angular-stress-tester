import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2659Component } from './comp-2659.component';

describe('Comp2659Component', () => {
  let component: Comp2659Component;
  let fixture: ComponentFixture<Comp2659Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2659Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2659Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
