import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4005Component } from './comp-4005.component';

describe('Comp4005Component', () => {
  let component: Comp4005Component;
  let fixture: ComponentFixture<Comp4005Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4005Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4005Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
