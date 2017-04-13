import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2938Component } from './comp-2938.component';

describe('Comp2938Component', () => {
  let component: Comp2938Component;
  let fixture: ComponentFixture<Comp2938Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2938Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2938Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
