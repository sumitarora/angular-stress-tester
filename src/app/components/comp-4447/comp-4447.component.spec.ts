import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4447Component } from './comp-4447.component';

describe('Comp4447Component', () => {
  let component: Comp4447Component;
  let fixture: ComponentFixture<Comp4447Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4447Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4447Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
