import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3356Component } from './comp-3356.component';

describe('Comp3356Component', () => {
  let component: Comp3356Component;
  let fixture: ComponentFixture<Comp3356Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3356Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3356Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
