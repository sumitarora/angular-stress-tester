import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4224Component } from './comp-4224.component';

describe('Comp4224Component', () => {
  let component: Comp4224Component;
  let fixture: ComponentFixture<Comp4224Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4224Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4224Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
