import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1224Component } from './comp-1224.component';

describe('Comp1224Component', () => {
  let component: Comp1224Component;
  let fixture: ComponentFixture<Comp1224Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1224Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1224Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
