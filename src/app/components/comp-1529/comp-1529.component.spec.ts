import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1529Component } from './comp-1529.component';

describe('Comp1529Component', () => {
  let component: Comp1529Component;
  let fixture: ComponentFixture<Comp1529Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1529Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1529Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
