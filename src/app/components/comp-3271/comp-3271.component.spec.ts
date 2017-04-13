import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3271Component } from './comp-3271.component';

describe('Comp3271Component', () => {
  let component: Comp3271Component;
  let fixture: ComponentFixture<Comp3271Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3271Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3271Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
