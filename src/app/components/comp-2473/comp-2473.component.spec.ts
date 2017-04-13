import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2473Component } from './comp-2473.component';

describe('Comp2473Component', () => {
  let component: Comp2473Component;
  let fixture: ComponentFixture<Comp2473Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2473Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2473Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
