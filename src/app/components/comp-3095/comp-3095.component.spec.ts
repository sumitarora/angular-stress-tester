import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3095Component } from './comp-3095.component';

describe('Comp3095Component', () => {
  let component: Comp3095Component;
  let fixture: ComponentFixture<Comp3095Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3095Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3095Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
