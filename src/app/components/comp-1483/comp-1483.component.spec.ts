import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1483Component } from './comp-1483.component';

describe('Comp1483Component', () => {
  let component: Comp1483Component;
  let fixture: ComponentFixture<Comp1483Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1483Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1483Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
