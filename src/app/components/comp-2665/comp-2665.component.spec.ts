import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2665Component } from './comp-2665.component';

describe('Comp2665Component', () => {
  let component: Comp2665Component;
  let fixture: ComponentFixture<Comp2665Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2665Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2665Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});