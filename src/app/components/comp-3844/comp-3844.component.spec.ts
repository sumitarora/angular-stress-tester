import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3844Component } from './comp-3844.component';

describe('Comp3844Component', () => {
  let component: Comp3844Component;
  let fixture: ComponentFixture<Comp3844Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3844Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3844Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
