import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3344Component } from './comp-3344.component';

describe('Comp3344Component', () => {
  let component: Comp3344Component;
  let fixture: ComponentFixture<Comp3344Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3344Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3344Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
