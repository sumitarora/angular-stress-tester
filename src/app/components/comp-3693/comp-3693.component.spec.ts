import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3693Component } from './comp-3693.component';

describe('Comp3693Component', () => {
  let component: Comp3693Component;
  let fixture: ComponentFixture<Comp3693Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3693Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3693Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
