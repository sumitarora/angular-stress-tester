import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4891Component } from './comp-4891.component';

describe('Comp4891Component', () => {
  let component: Comp4891Component;
  let fixture: ComponentFixture<Comp4891Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4891Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4891Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
