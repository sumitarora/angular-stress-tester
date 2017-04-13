import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4564Component } from './comp-4564.component';

describe('Comp4564Component', () => {
  let component: Comp4564Component;
  let fixture: ComponentFixture<Comp4564Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4564Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4564Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
