import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3117Component } from './comp-3117.component';

describe('Comp3117Component', () => {
  let component: Comp3117Component;
  let fixture: ComponentFixture<Comp3117Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3117Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3117Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
