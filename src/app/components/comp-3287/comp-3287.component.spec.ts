import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3287Component } from './comp-3287.component';

describe('Comp3287Component', () => {
  let component: Comp3287Component;
  let fixture: ComponentFixture<Comp3287Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3287Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3287Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
