import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4291Component } from './comp-4291.component';

describe('Comp4291Component', () => {
  let component: Comp4291Component;
  let fixture: ComponentFixture<Comp4291Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4291Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4291Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
