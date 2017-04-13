import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4802Component } from './comp-4802.component';

describe('Comp4802Component', () => {
  let component: Comp4802Component;
  let fixture: ComponentFixture<Comp4802Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4802Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4802Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
