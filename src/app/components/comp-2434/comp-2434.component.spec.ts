import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2434Component } from './comp-2434.component';

describe('Comp2434Component', () => {
  let component: Comp2434Component;
  let fixture: ComponentFixture<Comp2434Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2434Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2434Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
