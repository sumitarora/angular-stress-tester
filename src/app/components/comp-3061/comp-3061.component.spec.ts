import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3061Component } from './comp-3061.component';

describe('Comp3061Component', () => {
  let component: Comp3061Component;
  let fixture: ComponentFixture<Comp3061Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3061Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3061Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
