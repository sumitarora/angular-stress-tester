import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1546Component } from './comp-1546.component';

describe('Comp1546Component', () => {
  let component: Comp1546Component;
  let fixture: ComponentFixture<Comp1546Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1546Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1546Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
