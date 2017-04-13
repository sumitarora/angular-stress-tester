import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4787Component } from './comp-4787.component';

describe('Comp4787Component', () => {
  let component: Comp4787Component;
  let fixture: ComponentFixture<Comp4787Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4787Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4787Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
