import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3663Component } from './comp-3663.component';

describe('Comp3663Component', () => {
  let component: Comp3663Component;
  let fixture: ComponentFixture<Comp3663Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3663Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3663Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
