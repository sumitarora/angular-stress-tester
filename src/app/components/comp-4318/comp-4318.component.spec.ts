import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4318Component } from './comp-4318.component';

describe('Comp4318Component', () => {
  let component: Comp4318Component;
  let fixture: ComponentFixture<Comp4318Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4318Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4318Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
