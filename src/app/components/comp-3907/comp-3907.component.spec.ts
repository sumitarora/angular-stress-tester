import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3907Component } from './comp-3907.component';

describe('Comp3907Component', () => {
  let component: Comp3907Component;
  let fixture: ComponentFixture<Comp3907Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3907Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3907Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
