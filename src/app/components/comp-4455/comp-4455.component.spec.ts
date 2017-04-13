import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4455Component } from './comp-4455.component';

describe('Comp4455Component', () => {
  let component: Comp4455Component;
  let fixture: ComponentFixture<Comp4455Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4455Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4455Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
