import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4093Component } from './comp-4093.component';

describe('Comp4093Component', () => {
  let component: Comp4093Component;
  let fixture: ComponentFixture<Comp4093Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4093Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4093Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
