import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1120Component } from './comp-1120.component';

describe('Comp1120Component', () => {
  let component: Comp1120Component;
  let fixture: ComponentFixture<Comp1120Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1120Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1120Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
