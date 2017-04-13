import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3582Component } from './comp-3582.component';

describe('Comp3582Component', () => {
  let component: Comp3582Component;
  let fixture: ComponentFixture<Comp3582Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3582Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3582Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
