import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3746Component } from './comp-3746.component';

describe('Comp3746Component', () => {
  let component: Comp3746Component;
  let fixture: ComponentFixture<Comp3746Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3746Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3746Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
