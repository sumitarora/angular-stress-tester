import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4489Component } from './comp-4489.component';

describe('Comp4489Component', () => {
  let component: Comp4489Component;
  let fixture: ComponentFixture<Comp4489Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4489Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4489Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
