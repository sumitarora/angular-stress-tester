import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2233Component } from './comp-2233.component';

describe('Comp2233Component', () => {
  let component: Comp2233Component;
  let fixture: ComponentFixture<Comp2233Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2233Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2233Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
