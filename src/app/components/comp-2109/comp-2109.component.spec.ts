import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2109Component } from './comp-2109.component';

describe('Comp2109Component', () => {
  let component: Comp2109Component;
  let fixture: ComponentFixture<Comp2109Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2109Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2109Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
