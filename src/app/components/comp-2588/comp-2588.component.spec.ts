import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2588Component } from './comp-2588.component';

describe('Comp2588Component', () => {
  let component: Comp2588Component;
  let fixture: ComponentFixture<Comp2588Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2588Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2588Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
