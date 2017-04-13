import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2882Component } from './comp-2882.component';

describe('Comp2882Component', () => {
  let component: Comp2882Component;
  let fixture: ComponentFixture<Comp2882Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2882Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2882Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
