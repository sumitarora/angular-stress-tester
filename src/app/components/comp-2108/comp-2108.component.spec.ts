import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2108Component } from './comp-2108.component';

describe('Comp2108Component', () => {
  let component: Comp2108Component;
  let fixture: ComponentFixture<Comp2108Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2108Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2108Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
