import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2115Component } from './comp-2115.component';

describe('Comp2115Component', () => {
  let component: Comp2115Component;
  let fixture: ComponentFixture<Comp2115Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2115Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2115Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
