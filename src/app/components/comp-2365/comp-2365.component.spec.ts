import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2365Component } from './comp-2365.component';

describe('Comp2365Component', () => {
  let component: Comp2365Component;
  let fixture: ComponentFixture<Comp2365Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2365Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2365Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
