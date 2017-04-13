import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4959Component } from './comp-4959.component';

describe('Comp4959Component', () => {
  let component: Comp4959Component;
  let fixture: ComponentFixture<Comp4959Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4959Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4959Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
