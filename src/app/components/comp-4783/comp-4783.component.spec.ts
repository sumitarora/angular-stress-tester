import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4783Component } from './comp-4783.component';

describe('Comp4783Component', () => {
  let component: Comp4783Component;
  let fixture: ComponentFixture<Comp4783Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4783Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4783Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
