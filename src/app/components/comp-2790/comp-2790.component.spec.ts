import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2790Component } from './comp-2790.component';

describe('Comp2790Component', () => {
  let component: Comp2790Component;
  let fixture: ComponentFixture<Comp2790Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2790Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2790Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
