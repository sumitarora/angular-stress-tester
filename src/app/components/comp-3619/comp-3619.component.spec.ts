import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3619Component } from './comp-3619.component';

describe('Comp3619Component', () => {
  let component: Comp3619Component;
  let fixture: ComponentFixture<Comp3619Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3619Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3619Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
