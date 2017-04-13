import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3152Component } from './comp-3152.component';

describe('Comp3152Component', () => {
  let component: Comp3152Component;
  let fixture: ComponentFixture<Comp3152Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3152Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3152Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
