import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2732Component } from './comp-2732.component';

describe('Comp2732Component', () => {
  let component: Comp2732Component;
  let fixture: ComponentFixture<Comp2732Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2732Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2732Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
