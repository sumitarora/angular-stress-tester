import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4853Component } from './comp-4853.component';

describe('Comp4853Component', () => {
  let component: Comp4853Component;
  let fixture: ComponentFixture<Comp4853Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4853Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4853Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
