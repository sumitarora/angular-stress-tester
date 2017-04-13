import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3567Component } from './comp-3567.component';

describe('Comp3567Component', () => {
  let component: Comp3567Component;
  let fixture: ComponentFixture<Comp3567Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3567Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3567Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
