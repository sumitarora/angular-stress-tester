import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3258Component } from './comp-3258.component';

describe('Comp3258Component', () => {
  let component: Comp3258Component;
  let fixture: ComponentFixture<Comp3258Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3258Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3258Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
