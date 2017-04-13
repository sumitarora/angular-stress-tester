import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2452Component } from './comp-2452.component';

describe('Comp2452Component', () => {
  let component: Comp2452Component;
  let fixture: ComponentFixture<Comp2452Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2452Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2452Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
