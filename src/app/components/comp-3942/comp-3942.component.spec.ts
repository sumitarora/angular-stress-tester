import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3942Component } from './comp-3942.component';

describe('Comp3942Component', () => {
  let component: Comp3942Component;
  let fixture: ComponentFixture<Comp3942Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3942Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3942Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});