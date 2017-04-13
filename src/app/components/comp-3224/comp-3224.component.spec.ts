import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3224Component } from './comp-3224.component';

describe('Comp3224Component', () => {
  let component: Comp3224Component;
  let fixture: ComponentFixture<Comp3224Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3224Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3224Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
