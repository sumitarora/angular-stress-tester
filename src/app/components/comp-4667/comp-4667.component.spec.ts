import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4667Component } from './comp-4667.component';

describe('Comp4667Component', () => {
  let component: Comp4667Component;
  let fixture: ComponentFixture<Comp4667Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4667Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4667Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});