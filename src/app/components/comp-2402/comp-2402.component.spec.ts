import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2402Component } from './comp-2402.component';

describe('Comp2402Component', () => {
  let component: Comp2402Component;
  let fixture: ComponentFixture<Comp2402Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2402Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2402Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
