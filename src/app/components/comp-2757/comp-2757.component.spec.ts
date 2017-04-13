import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2757Component } from './comp-2757.component';

describe('Comp2757Component', () => {
  let component: Comp2757Component;
  let fixture: ComponentFixture<Comp2757Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2757Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2757Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
