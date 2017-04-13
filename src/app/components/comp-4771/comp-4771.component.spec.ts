import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4771Component } from './comp-4771.component';

describe('Comp4771Component', () => {
  let component: Comp4771Component;
  let fixture: ComponentFixture<Comp4771Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4771Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4771Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
