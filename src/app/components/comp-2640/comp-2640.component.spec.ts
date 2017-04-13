import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2640Component } from './comp-2640.component';

describe('Comp2640Component', () => {
  let component: Comp2640Component;
  let fixture: ComponentFixture<Comp2640Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2640Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2640Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
