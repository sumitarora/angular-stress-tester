import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2316Component } from './comp-2316.component';

describe('Comp2316Component', () => {
  let component: Comp2316Component;
  let fixture: ComponentFixture<Comp2316Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2316Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2316Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
