import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4886Component } from './comp-4886.component';

describe('Comp4886Component', () => {
  let component: Comp4886Component;
  let fixture: ComponentFixture<Comp4886Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4886Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4886Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
