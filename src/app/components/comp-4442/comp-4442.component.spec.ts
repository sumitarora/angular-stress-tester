import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4442Component } from './comp-4442.component';

describe('Comp4442Component', () => {
  let component: Comp4442Component;
  let fixture: ComponentFixture<Comp4442Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4442Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4442Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
