import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3807Component } from './comp-3807.component';

describe('Comp3807Component', () => {
  let component: Comp3807Component;
  let fixture: ComponentFixture<Comp3807Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3807Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3807Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
