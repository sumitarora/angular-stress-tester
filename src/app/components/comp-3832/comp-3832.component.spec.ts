import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3832Component } from './comp-3832.component';

describe('Comp3832Component', () => {
  let component: Comp3832Component;
  let fixture: ComponentFixture<Comp3832Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3832Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3832Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
