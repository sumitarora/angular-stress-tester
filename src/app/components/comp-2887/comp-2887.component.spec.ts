import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2887Component } from './comp-2887.component';

describe('Comp2887Component', () => {
  let component: Comp2887Component;
  let fixture: ComponentFixture<Comp2887Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2887Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2887Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
