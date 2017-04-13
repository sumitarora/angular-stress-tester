import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2814Component } from './comp-2814.component';

describe('Comp2814Component', () => {
  let component: Comp2814Component;
  let fixture: ComponentFixture<Comp2814Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2814Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2814Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
