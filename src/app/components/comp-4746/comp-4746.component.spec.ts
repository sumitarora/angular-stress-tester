import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4746Component } from './comp-4746.component';

describe('Comp4746Component', () => {
  let component: Comp4746Component;
  let fixture: ComponentFixture<Comp4746Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4746Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4746Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
