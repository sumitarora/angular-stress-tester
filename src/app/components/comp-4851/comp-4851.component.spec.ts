import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4851Component } from './comp-4851.component';

describe('Comp4851Component', () => {
  let component: Comp4851Component;
  let fixture: ComponentFixture<Comp4851Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4851Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4851Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
