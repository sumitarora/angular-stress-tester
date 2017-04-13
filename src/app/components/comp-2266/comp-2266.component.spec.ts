import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2266Component } from './comp-2266.component';

describe('Comp2266Component', () => {
  let component: Comp2266Component;
  let fixture: ComponentFixture<Comp2266Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2266Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2266Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
