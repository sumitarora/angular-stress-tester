import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3113Component } from './comp-3113.component';

describe('Comp3113Component', () => {
  let component: Comp3113Component;
  let fixture: ComponentFixture<Comp3113Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3113Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3113Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
