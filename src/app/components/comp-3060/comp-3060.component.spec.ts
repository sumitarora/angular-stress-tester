import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3060Component } from './comp-3060.component';

describe('Comp3060Component', () => {
  let component: Comp3060Component;
  let fixture: ComponentFixture<Comp3060Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3060Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3060Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
