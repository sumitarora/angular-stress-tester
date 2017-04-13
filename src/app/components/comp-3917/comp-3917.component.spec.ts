import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3917Component } from './comp-3917.component';

describe('Comp3917Component', () => {
  let component: Comp3917Component;
  let fixture: ComponentFixture<Comp3917Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3917Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3917Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
