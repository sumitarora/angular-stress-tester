import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4573Component } from './comp-4573.component';

describe('Comp4573Component', () => {
  let component: Comp4573Component;
  let fixture: ComponentFixture<Comp4573Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4573Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4573Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
