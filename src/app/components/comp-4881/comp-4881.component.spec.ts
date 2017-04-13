import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4881Component } from './comp-4881.component';

describe('Comp4881Component', () => {
  let component: Comp4881Component;
  let fixture: ComponentFixture<Comp4881Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4881Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4881Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
