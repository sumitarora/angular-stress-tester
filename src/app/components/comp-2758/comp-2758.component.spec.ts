import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2758Component } from './comp-2758.component';

describe('Comp2758Component', () => {
  let component: Comp2758Component;
  let fixture: ComponentFixture<Comp2758Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2758Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2758Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
