import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3733Component } from './comp-3733.component';

describe('Comp3733Component', () => {
  let component: Comp3733Component;
  let fixture: ComponentFixture<Comp3733Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3733Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3733Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
