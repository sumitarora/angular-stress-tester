import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3150Component } from './comp-3150.component';

describe('Comp3150Component', () => {
  let component: Comp3150Component;
  let fixture: ComponentFixture<Comp3150Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3150Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3150Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
