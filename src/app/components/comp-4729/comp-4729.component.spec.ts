import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4729Component } from './comp-4729.component';

describe('Comp4729Component', () => {
  let component: Comp4729Component;
  let fixture: ComponentFixture<Comp4729Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4729Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4729Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
