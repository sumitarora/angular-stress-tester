import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4275Component } from './comp-4275.component';

describe('Comp4275Component', () => {
  let component: Comp4275Component;
  let fixture: ComponentFixture<Comp4275Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4275Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4275Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
