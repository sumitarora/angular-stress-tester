import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2678Component } from './comp-2678.component';

describe('Comp2678Component', () => {
  let component: Comp2678Component;
  let fixture: ComponentFixture<Comp2678Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2678Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2678Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
