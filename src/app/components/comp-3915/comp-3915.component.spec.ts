import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3915Component } from './comp-3915.component';

describe('Comp3915Component', () => {
  let component: Comp3915Component;
  let fixture: ComponentFixture<Comp3915Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3915Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3915Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
