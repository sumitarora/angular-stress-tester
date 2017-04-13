import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2263Component } from './comp-2263.component';

describe('Comp2263Component', () => {
  let component: Comp2263Component;
  let fixture: ComponentFixture<Comp2263Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2263Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2263Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
