import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4418Component } from './comp-4418.component';

describe('Comp4418Component', () => {
  let component: Comp4418Component;
  let fixture: ComponentFixture<Comp4418Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4418Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4418Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
