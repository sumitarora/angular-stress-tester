import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2364Component } from './comp-2364.component';

describe('Comp2364Component', () => {
  let component: Comp2364Component;
  let fixture: ComponentFixture<Comp2364Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2364Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2364Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
