import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2766Component } from './comp-2766.component';

describe('Comp2766Component', () => {
  let component: Comp2766Component;
  let fixture: ComponentFixture<Comp2766Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2766Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2766Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
