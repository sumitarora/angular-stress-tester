import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4081Component } from './comp-4081.component';

describe('Comp4081Component', () => {
  let component: Comp4081Component;
  let fixture: ComponentFixture<Comp4081Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4081Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4081Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
