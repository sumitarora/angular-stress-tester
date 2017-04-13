import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3358Component } from './comp-3358.component';

describe('Comp3358Component', () => {
  let component: Comp3358Component;
  let fixture: ComponentFixture<Comp3358Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3358Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3358Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
