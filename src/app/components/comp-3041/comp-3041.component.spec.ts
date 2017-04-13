import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3041Component } from './comp-3041.component';

describe('Comp3041Component', () => {
  let component: Comp3041Component;
  let fixture: ComponentFixture<Comp3041Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3041Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3041Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
