import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4955Component } from './comp-4955.component';

describe('Comp4955Component', () => {
  let component: Comp4955Component;
  let fixture: ComponentFixture<Comp4955Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4955Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4955Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
