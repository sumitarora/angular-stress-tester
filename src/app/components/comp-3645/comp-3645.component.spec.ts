import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3645Component } from './comp-3645.component';

describe('Comp3645Component', () => {
  let component: Comp3645Component;
  let fixture: ComponentFixture<Comp3645Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3645Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3645Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
