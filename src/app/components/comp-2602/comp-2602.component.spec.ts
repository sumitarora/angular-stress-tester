import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2602Component } from './comp-2602.component';

describe('Comp2602Component', () => {
  let component: Comp2602Component;
  let fixture: ComponentFixture<Comp2602Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2602Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2602Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
