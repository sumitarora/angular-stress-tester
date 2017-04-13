import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4759Component } from './comp-4759.component';

describe('Comp4759Component', () => {
  let component: Comp4759Component;
  let fixture: ComponentFixture<Comp4759Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4759Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4759Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
