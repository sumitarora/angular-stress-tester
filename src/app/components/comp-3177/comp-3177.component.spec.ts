import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3177Component } from './comp-3177.component';

describe('Comp3177Component', () => {
  let component: Comp3177Component;
  let fixture: ComponentFixture<Comp3177Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3177Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3177Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
