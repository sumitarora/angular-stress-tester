import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2215Component } from './comp-2215.component';

describe('Comp2215Component', () => {
  let component: Comp2215Component;
  let fixture: ComponentFixture<Comp2215Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2215Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2215Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
