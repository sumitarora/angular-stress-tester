import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2094Component } from './comp-2094.component';

describe('Comp2094Component', () => {
  let component: Comp2094Component;
  let fixture: ComponentFixture<Comp2094Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2094Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2094Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
