import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4323Component } from './comp-4323.component';

describe('Comp4323Component', () => {
  let component: Comp4323Component;
  let fixture: ComponentFixture<Comp4323Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4323Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4323Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});