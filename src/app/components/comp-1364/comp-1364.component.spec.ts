import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1364Component } from './comp-1364.component';

describe('Comp1364Component', () => {
  let component: Comp1364Component;
  let fixture: ComponentFixture<Comp1364Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1364Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1364Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
