import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2677Component } from './comp-2677.component';

describe('Comp2677Component', () => {
  let component: Comp2677Component;
  let fixture: ComponentFixture<Comp2677Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2677Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2677Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
