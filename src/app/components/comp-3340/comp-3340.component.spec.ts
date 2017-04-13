import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3340Component } from './comp-3340.component';

describe('Comp3340Component', () => {
  let component: Comp3340Component;
  let fixture: ComponentFixture<Comp3340Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3340Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3340Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
