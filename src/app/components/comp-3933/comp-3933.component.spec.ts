import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3933Component } from './comp-3933.component';

describe('Comp3933Component', () => {
  let component: Comp3933Component;
  let fixture: ComponentFixture<Comp3933Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3933Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3933Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
