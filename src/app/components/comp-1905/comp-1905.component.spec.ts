import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1905Component } from './comp-1905.component';

describe('Comp1905Component', () => {
  let component: Comp1905Component;
  let fixture: ComponentFixture<Comp1905Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1905Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1905Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
