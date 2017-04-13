import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3964Component } from './comp-3964.component';

describe('Comp3964Component', () => {
  let component: Comp3964Component;
  let fixture: ComponentFixture<Comp3964Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3964Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3964Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
