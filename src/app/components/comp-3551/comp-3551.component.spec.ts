import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3551Component } from './comp-3551.component';

describe('Comp3551Component', () => {
  let component: Comp3551Component;
  let fixture: ComponentFixture<Comp3551Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3551Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3551Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
