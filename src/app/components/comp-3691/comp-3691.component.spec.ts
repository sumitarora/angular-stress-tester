import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3691Component } from './comp-3691.component';

describe('Comp3691Component', () => {
  let component: Comp3691Component;
  let fixture: ComponentFixture<Comp3691Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3691Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3691Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
