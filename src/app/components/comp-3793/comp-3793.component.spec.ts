import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3793Component } from './comp-3793.component';

describe('Comp3793Component', () => {
  let component: Comp3793Component;
  let fixture: ComponentFixture<Comp3793Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3793Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3793Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
