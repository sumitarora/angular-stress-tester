import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3227Component } from './comp-3227.component';

describe('Comp3227Component', () => {
  let component: Comp3227Component;
  let fixture: ComponentFixture<Comp3227Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3227Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3227Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
