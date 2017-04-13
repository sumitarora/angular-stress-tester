import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4550Component } from './comp-4550.component';

describe('Comp4550Component', () => {
  let component: Comp4550Component;
  let fixture: ComponentFixture<Comp4550Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4550Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4550Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
