import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4859Component } from './comp-4859.component';

describe('Comp4859Component', () => {
  let component: Comp4859Component;
  let fixture: ComponentFixture<Comp4859Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4859Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4859Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
