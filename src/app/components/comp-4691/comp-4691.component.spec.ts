import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4691Component } from './comp-4691.component';

describe('Comp4691Component', () => {
  let component: Comp4691Component;
  let fixture: ComponentFixture<Comp4691Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4691Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4691Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
