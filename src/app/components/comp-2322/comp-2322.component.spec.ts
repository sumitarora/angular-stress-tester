import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2322Component } from './comp-2322.component';

describe('Comp2322Component', () => {
  let component: Comp2322Component;
  let fixture: ComponentFixture<Comp2322Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2322Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2322Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
