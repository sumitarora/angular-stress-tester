import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3233Component } from './comp-3233.component';

describe('Comp3233Component', () => {
  let component: Comp3233Component;
  let fixture: ComponentFixture<Comp3233Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3233Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3233Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
