import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4083Component } from './comp-4083.component';

describe('Comp4083Component', () => {
  let component: Comp4083Component;
  let fixture: ComponentFixture<Comp4083Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4083Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4083Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
