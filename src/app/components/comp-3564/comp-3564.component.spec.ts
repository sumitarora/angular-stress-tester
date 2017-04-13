import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3564Component } from './comp-3564.component';

describe('Comp3564Component', () => {
  let component: Comp3564Component;
  let fixture: ComponentFixture<Comp3564Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3564Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3564Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
