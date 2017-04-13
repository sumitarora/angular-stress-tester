import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3599Component } from './comp-3599.component';

describe('Comp3599Component', () => {
  let component: Comp3599Component;
  let fixture: ComponentFixture<Comp3599Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3599Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3599Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
