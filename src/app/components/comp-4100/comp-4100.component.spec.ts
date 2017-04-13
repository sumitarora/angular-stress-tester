import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4100Component } from './comp-4100.component';

describe('Comp4100Component', () => {
  let component: Comp4100Component;
  let fixture: ComponentFixture<Comp4100Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4100Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4100Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
