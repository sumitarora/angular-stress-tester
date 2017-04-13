import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2028Component } from './comp-2028.component';

describe('Comp2028Component', () => {
  let component: Comp2028Component;
  let fixture: ComponentFixture<Comp2028Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2028Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2028Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
