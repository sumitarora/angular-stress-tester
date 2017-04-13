import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2570Component } from './comp-2570.component';

describe('Comp2570Component', () => {
  let component: Comp2570Component;
  let fixture: ComponentFixture<Comp2570Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2570Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2570Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
