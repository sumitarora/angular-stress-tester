import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4481Component } from './comp-4481.component';

describe('Comp4481Component', () => {
  let component: Comp4481Component;
  let fixture: ComponentFixture<Comp4481Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4481Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4481Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
