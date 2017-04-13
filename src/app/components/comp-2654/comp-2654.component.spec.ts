import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2654Component } from './comp-2654.component';

describe('Comp2654Component', () => {
  let component: Comp2654Component;
  let fixture: ComponentFixture<Comp2654Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2654Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2654Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
