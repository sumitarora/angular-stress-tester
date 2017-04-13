import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4993Component } from './comp-4993.component';

describe('Comp4993Component', () => {
  let component: Comp4993Component;
  let fixture: ComponentFixture<Comp4993Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4993Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4993Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
