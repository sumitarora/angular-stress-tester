import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2711Component } from './comp-2711.component';

describe('Comp2711Component', () => {
  let component: Comp2711Component;
  let fixture: ComponentFixture<Comp2711Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2711Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2711Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
