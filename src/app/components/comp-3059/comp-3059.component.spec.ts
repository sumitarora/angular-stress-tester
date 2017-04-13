import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3059Component } from './comp-3059.component';

describe('Comp3059Component', () => {
  let component: Comp3059Component;
  let fixture: ComponentFixture<Comp3059Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3059Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3059Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
