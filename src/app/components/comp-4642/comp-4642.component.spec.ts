import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4642Component } from './comp-4642.component';

describe('Comp4642Component', () => {
  let component: Comp4642Component;
  let fixture: ComponentFixture<Comp4642Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4642Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4642Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
