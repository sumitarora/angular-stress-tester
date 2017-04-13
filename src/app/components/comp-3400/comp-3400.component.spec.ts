import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3400Component } from './comp-3400.component';

describe('Comp3400Component', () => {
  let component: Comp3400Component;
  let fixture: ComponentFixture<Comp3400Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3400Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3400Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
