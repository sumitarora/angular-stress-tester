import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4983Component } from './comp-4983.component';

describe('Comp4983Component', () => {
  let component: Comp4983Component;
  let fixture: ComponentFixture<Comp4983Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4983Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4983Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
