import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2551Component } from './comp-2551.component';

describe('Comp2551Component', () => {
  let component: Comp2551Component;
  let fixture: ComponentFixture<Comp2551Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2551Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2551Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
