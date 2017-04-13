import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3989Component } from './comp-3989.component';

describe('Comp3989Component', () => {
  let component: Comp3989Component;
  let fixture: ComponentFixture<Comp3989Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3989Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3989Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
