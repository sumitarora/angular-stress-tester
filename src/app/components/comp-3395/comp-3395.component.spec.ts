import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3395Component } from './comp-3395.component';

describe('Comp3395Component', () => {
  let component: Comp3395Component;
  let fixture: ComponentFixture<Comp3395Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3395Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3395Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
