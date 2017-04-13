import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3506Component } from './comp-3506.component';

describe('Comp3506Component', () => {
  let component: Comp3506Component;
  let fixture: ComponentFixture<Comp3506Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3506Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3506Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
