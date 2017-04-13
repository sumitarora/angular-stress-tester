import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2912Component } from './comp-2912.component';

describe('Comp2912Component', () => {
  let component: Comp2912Component;
  let fixture: ComponentFixture<Comp2912Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2912Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2912Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
