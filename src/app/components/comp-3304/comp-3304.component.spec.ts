import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3304Component } from './comp-3304.component';

describe('Comp3304Component', () => {
  let component: Comp3304Component;
  let fixture: ComponentFixture<Comp3304Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3304Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3304Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
