import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4762Component } from './comp-4762.component';

describe('Comp4762Component', () => {
  let component: Comp4762Component;
  let fixture: ComponentFixture<Comp4762Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4762Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4762Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
