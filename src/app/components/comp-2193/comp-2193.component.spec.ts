import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2193Component } from './comp-2193.component';

describe('Comp2193Component', () => {
  let component: Comp2193Component;
  let fixture: ComponentFixture<Comp2193Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2193Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2193Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
