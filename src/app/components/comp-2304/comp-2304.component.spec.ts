import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2304Component } from './comp-2304.component';

describe('Comp2304Component', () => {
  let component: Comp2304Component;
  let fixture: ComponentFixture<Comp2304Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2304Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2304Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
