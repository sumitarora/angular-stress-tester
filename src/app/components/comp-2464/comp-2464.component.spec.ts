import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2464Component } from './comp-2464.component';

describe('Comp2464Component', () => {
  let component: Comp2464Component;
  let fixture: ComponentFixture<Comp2464Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2464Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2464Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
