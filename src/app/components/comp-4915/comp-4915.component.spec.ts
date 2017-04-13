import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4915Component } from './comp-4915.component';

describe('Comp4915Component', () => {
  let component: Comp4915Component;
  let fixture: ComponentFixture<Comp4915Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4915Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4915Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
