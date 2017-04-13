import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3550Component } from './comp-3550.component';

describe('Comp3550Component', () => {
  let component: Comp3550Component;
  let fixture: ComponentFixture<Comp3550Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3550Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3550Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
