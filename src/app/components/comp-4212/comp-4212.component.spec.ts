import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4212Component } from './comp-4212.component';

describe('Comp4212Component', () => {
  let component: Comp4212Component;
  let fixture: ComponentFixture<Comp4212Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4212Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4212Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
