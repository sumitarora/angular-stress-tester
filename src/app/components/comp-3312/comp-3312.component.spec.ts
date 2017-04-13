import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3312Component } from './comp-3312.component';

describe('Comp3312Component', () => {
  let component: Comp3312Component;
  let fixture: ComponentFixture<Comp3312Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3312Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3312Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
