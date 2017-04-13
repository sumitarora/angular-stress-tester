import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3950Component } from './comp-3950.component';

describe('Comp3950Component', () => {
  let component: Comp3950Component;
  let fixture: ComponentFixture<Comp3950Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3950Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3950Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
