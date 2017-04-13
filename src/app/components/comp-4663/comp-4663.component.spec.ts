import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4663Component } from './comp-4663.component';

describe('Comp4663Component', () => {
  let component: Comp4663Component;
  let fixture: ComponentFixture<Comp4663Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4663Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4663Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
