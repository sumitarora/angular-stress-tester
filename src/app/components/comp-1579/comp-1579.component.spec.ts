import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1579Component } from './comp-1579.component';

describe('Comp1579Component', () => {
  let component: Comp1579Component;
  let fixture: ComponentFixture<Comp1579Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1579Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1579Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
