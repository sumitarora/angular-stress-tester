import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3412Component } from './comp-3412.component';

describe('Comp3412Component', () => {
  let component: Comp3412Component;
  let fixture: ComponentFixture<Comp3412Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3412Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3412Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
