import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2054Component } from './comp-2054.component';

describe('Comp2054Component', () => {
  let component: Comp2054Component;
  let fixture: ComponentFixture<Comp2054Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2054Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2054Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
