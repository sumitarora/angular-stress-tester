import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3925Component } from './comp-3925.component';

describe('Comp3925Component', () => {
  let component: Comp3925Component;
  let fixture: ComponentFixture<Comp3925Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3925Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3925Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
