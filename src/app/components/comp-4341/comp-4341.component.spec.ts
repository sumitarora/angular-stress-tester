import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4341Component } from './comp-4341.component';

describe('Comp4341Component', () => {
  let component: Comp4341Component;
  let fixture: ComponentFixture<Comp4341Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4341Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4341Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
