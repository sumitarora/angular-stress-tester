import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4797Component } from './comp-4797.component';

describe('Comp4797Component', () => {
  let component: Comp4797Component;
  let fixture: ComponentFixture<Comp4797Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4797Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4797Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
