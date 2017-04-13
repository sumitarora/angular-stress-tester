import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3307Component } from './comp-3307.component';

describe('Comp3307Component', () => {
  let component: Comp3307Component;
  let fixture: ComponentFixture<Comp3307Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3307Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3307Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
