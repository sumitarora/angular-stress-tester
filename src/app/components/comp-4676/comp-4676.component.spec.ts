import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4676Component } from './comp-4676.component';

describe('Comp4676Component', () => {
  let component: Comp4676Component;
  let fixture: ComponentFixture<Comp4676Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4676Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4676Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
