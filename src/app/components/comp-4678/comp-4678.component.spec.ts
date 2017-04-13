import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4678Component } from './comp-4678.component';

describe('Comp4678Component', () => {
  let component: Comp4678Component;
  let fixture: ComponentFixture<Comp4678Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4678Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4678Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
