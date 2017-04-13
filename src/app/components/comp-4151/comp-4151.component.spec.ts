import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4151Component } from './comp-4151.component';

describe('Comp4151Component', () => {
  let component: Comp4151Component;
  let fixture: ComponentFixture<Comp4151Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4151Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4151Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
