import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4223Component } from './comp-4223.component';

describe('Comp4223Component', () => {
  let component: Comp4223Component;
  let fixture: ComponentFixture<Comp4223Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4223Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4223Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
