import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3038Component } from './comp-3038.component';

describe('Comp3038Component', () => {
  let component: Comp3038Component;
  let fixture: ComponentFixture<Comp3038Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3038Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3038Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
