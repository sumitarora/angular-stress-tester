import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3187Component } from './comp-3187.component';

describe('Comp3187Component', () => {
  let component: Comp3187Component;
  let fixture: ComponentFixture<Comp3187Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3187Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3187Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
