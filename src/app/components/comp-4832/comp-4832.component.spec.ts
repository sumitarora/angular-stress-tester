import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4832Component } from './comp-4832.component';

describe('Comp4832Component', () => {
  let component: Comp4832Component;
  let fixture: ComponentFixture<Comp4832Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4832Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4832Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
