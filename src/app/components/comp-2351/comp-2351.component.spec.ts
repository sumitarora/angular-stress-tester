import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2351Component } from './comp-2351.component';

describe('Comp2351Component', () => {
  let component: Comp2351Component;
  let fixture: ComponentFixture<Comp2351Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2351Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2351Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
