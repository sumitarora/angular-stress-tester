import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3583Component } from './comp-3583.component';

describe('Comp3583Component', () => {
  let component: Comp3583Component;
  let fixture: ComponentFixture<Comp3583Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3583Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3583Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
