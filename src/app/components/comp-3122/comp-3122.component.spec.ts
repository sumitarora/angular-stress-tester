import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3122Component } from './comp-3122.component';

describe('Comp3122Component', () => {
  let component: Comp3122Component;
  let fixture: ComponentFixture<Comp3122Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3122Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3122Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
