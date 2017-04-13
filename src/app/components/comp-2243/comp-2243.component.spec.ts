import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2243Component } from './comp-2243.component';

describe('Comp2243Component', () => {
  let component: Comp2243Component;
  let fixture: ComponentFixture<Comp2243Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2243Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2243Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
