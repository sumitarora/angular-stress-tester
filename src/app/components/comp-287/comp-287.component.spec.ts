import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp287Component } from './comp-287.component';

describe('Comp287Component', () => {
  let component: Comp287Component;
  let fixture: ComponentFixture<Comp287Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp287Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp287Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
