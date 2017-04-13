import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2660Component } from './comp-2660.component';

describe('Comp2660Component', () => {
  let component: Comp2660Component;
  let fixture: ComponentFixture<Comp2660Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2660Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2660Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
