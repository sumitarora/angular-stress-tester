import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4214Component } from './comp-4214.component';

describe('Comp4214Component', () => {
  let component: Comp4214Component;
  let fixture: ComponentFixture<Comp4214Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4214Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4214Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
