import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4764Component } from './comp-4764.component';

describe('Comp4764Component', () => {
  let component: Comp4764Component;
  let fixture: ComponentFixture<Comp4764Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4764Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4764Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
