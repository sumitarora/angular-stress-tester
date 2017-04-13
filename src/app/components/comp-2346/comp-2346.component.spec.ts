import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2346Component } from './comp-2346.component';

describe('Comp2346Component', () => {
  let component: Comp2346Component;
  let fixture: ComponentFixture<Comp2346Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2346Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2346Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
