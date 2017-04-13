import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3339Component } from './comp-3339.component';

describe('Comp3339Component', () => {
  let component: Comp3339Component;
  let fixture: ComponentFixture<Comp3339Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3339Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3339Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
