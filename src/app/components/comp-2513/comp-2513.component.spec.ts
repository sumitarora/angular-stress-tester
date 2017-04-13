import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2513Component } from './comp-2513.component';

describe('Comp2513Component', () => {
  let component: Comp2513Component;
  let fixture: ComponentFixture<Comp2513Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2513Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2513Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
