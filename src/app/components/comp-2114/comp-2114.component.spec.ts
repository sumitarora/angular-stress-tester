import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2114Component } from './comp-2114.component';

describe('Comp2114Component', () => {
  let component: Comp2114Component;
  let fixture: ComponentFixture<Comp2114Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2114Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2114Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
