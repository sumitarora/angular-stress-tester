import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2634Component } from './comp-2634.component';

describe('Comp2634Component', () => {
  let component: Comp2634Component;
  let fixture: ComponentFixture<Comp2634Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2634Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2634Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
