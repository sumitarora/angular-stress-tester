import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2153Component } from './comp-2153.component';

describe('Comp2153Component', () => {
  let component: Comp2153Component;
  let fixture: ComponentFixture<Comp2153Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2153Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2153Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
