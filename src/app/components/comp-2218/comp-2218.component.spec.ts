import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2218Component } from './comp-2218.component';

describe('Comp2218Component', () => {
  let component: Comp2218Component;
  let fixture: ComponentFixture<Comp2218Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2218Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2218Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
