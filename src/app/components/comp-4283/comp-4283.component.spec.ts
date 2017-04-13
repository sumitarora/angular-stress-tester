import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4283Component } from './comp-4283.component';

describe('Comp4283Component', () => {
  let component: Comp4283Component;
  let fixture: ComponentFixture<Comp4283Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4283Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4283Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
