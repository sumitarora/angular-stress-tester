import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1670Component } from './comp-1670.component';

describe('Comp1670Component', () => {
  let component: Comp1670Component;
  let fixture: ComponentFixture<Comp1670Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1670Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1670Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
