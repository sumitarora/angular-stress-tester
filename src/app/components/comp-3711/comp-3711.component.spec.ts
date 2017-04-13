import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3711Component } from './comp-3711.component';

describe('Comp3711Component', () => {
  let component: Comp3711Component;
  let fixture: ComponentFixture<Comp3711Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3711Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3711Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
