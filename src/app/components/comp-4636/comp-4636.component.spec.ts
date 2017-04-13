import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4636Component } from './comp-4636.component';

describe('Comp4636Component', () => {
  let component: Comp4636Component;
  let fixture: ComponentFixture<Comp4636Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4636Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4636Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
