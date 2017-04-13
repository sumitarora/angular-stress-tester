import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4644Component } from './comp-4644.component';

describe('Comp4644Component', () => {
  let component: Comp4644Component;
  let fixture: ComponentFixture<Comp4644Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4644Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4644Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
