import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2992Component } from './comp-2992.component';

describe('Comp2992Component', () => {
  let component: Comp2992Component;
  let fixture: ComponentFixture<Comp2992Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2992Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2992Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
