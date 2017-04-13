import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4222Component } from './comp-4222.component';

describe('Comp4222Component', () => {
  let component: Comp4222Component;
  let fixture: ComponentFixture<Comp4222Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4222Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4222Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
