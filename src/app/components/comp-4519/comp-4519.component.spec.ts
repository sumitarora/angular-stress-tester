import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4519Component } from './comp-4519.component';

describe('Comp4519Component', () => {
  let component: Comp4519Component;
  let fixture: ComponentFixture<Comp4519Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4519Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4519Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
