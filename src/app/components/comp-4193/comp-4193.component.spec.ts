import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4193Component } from './comp-4193.component';

describe('Comp4193Component', () => {
  let component: Comp4193Component;
  let fixture: ComponentFixture<Comp4193Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4193Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4193Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
