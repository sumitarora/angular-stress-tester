import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2530Component } from './comp-2530.component';

describe('Comp2530Component', () => {
  let component: Comp2530Component;
  let fixture: ComponentFixture<Comp2530Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2530Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2530Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
