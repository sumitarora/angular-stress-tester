import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4156Component } from './comp-4156.component';

describe('Comp4156Component', () => {
  let component: Comp4156Component;
  let fixture: ComponentFixture<Comp4156Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4156Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4156Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
