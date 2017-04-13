import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2269Component } from './comp-2269.component';

describe('Comp2269Component', () => {
  let component: Comp2269Component;
  let fixture: ComponentFixture<Comp2269Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2269Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2269Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
