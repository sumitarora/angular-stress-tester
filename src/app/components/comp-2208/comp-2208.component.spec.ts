import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2208Component } from './comp-2208.component';

describe('Comp2208Component', () => {
  let component: Comp2208Component;
  let fixture: ComponentFixture<Comp2208Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2208Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2208Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
