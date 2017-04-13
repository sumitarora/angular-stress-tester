import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4122Component } from './comp-4122.component';

describe('Comp4122Component', () => {
  let component: Comp4122Component;
  let fixture: ComponentFixture<Comp4122Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4122Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4122Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
