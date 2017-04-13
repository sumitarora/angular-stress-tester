import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3955Component } from './comp-3955.component';

describe('Comp3955Component', () => {
  let component: Comp3955Component;
  let fixture: ComponentFixture<Comp3955Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3955Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3955Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
