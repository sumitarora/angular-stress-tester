import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3727Component } from './comp-3727.component';

describe('Comp3727Component', () => {
  let component: Comp3727Component;
  let fixture: ComponentFixture<Comp3727Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3727Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3727Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
