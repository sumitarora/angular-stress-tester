import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4591Component } from './comp-4591.component';

describe('Comp4591Component', () => {
  let component: Comp4591Component;
  let fixture: ComponentFixture<Comp4591Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4591Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4591Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
