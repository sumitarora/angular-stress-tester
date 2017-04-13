import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2649Component } from './comp-2649.component';

describe('Comp2649Component', () => {
  let component: Comp2649Component;
  let fixture: ComponentFixture<Comp2649Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2649Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2649Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
