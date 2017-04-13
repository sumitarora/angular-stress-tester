import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2508Component } from './comp-2508.component';

describe('Comp2508Component', () => {
  let component: Comp2508Component;
  let fixture: ComponentFixture<Comp2508Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2508Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2508Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
