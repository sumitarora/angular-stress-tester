import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3357Component } from './comp-3357.component';

describe('Comp3357Component', () => {
  let component: Comp3357Component;
  let fixture: ComponentFixture<Comp3357Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3357Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3357Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
