import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3093Component } from './comp-3093.component';

describe('Comp3093Component', () => {
  let component: Comp3093Component;
  let fixture: ComponentFixture<Comp3093Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3093Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3093Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
