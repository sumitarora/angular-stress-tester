import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4980Component } from './comp-4980.component';

describe('Comp4980Component', () => {
  let component: Comp4980Component;
  let fixture: ComponentFixture<Comp4980Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4980Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4980Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
