import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3345Component } from './comp-3345.component';

describe('Comp3345Component', () => {
  let component: Comp3345Component;
  let fixture: ComponentFixture<Comp3345Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3345Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3345Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
