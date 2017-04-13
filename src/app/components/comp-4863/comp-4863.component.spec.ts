import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4863Component } from './comp-4863.component';

describe('Comp4863Component', () => {
  let component: Comp4863Component;
  let fixture: ComponentFixture<Comp4863Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4863Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4863Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
