import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3805Component } from './comp-3805.component';

describe('Comp3805Component', () => {
  let component: Comp3805Component;
  let fixture: ComponentFixture<Comp3805Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3805Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3805Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
