import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3937Component } from './comp-3937.component';

describe('Comp3937Component', () => {
  let component: Comp3937Component;
  let fixture: ComponentFixture<Comp3937Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3937Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3937Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
