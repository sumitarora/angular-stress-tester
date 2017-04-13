import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4858Component } from './comp-4858.component';

describe('Comp4858Component', () => {
  let component: Comp4858Component;
  let fixture: ComponentFixture<Comp4858Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4858Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4858Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
