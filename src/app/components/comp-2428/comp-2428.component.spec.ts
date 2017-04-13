import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2428Component } from './comp-2428.component';

describe('Comp2428Component', () => {
  let component: Comp2428Component;
  let fixture: ComponentFixture<Comp2428Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2428Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2428Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
