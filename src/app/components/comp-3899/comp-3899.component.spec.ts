import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3899Component } from './comp-3899.component';

describe('Comp3899Component', () => {
  let component: Comp3899Component;
  let fixture: ComponentFixture<Comp3899Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3899Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3899Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
