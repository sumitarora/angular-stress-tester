import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3731Component } from './comp-3731.component';

describe('Comp3731Component', () => {
  let component: Comp3731Component;
  let fixture: ComponentFixture<Comp3731Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3731Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3731Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
