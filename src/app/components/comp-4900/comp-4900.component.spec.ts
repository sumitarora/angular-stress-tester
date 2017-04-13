import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4900Component } from './comp-4900.component';

describe('Comp4900Component', () => {
  let component: Comp4900Component;
  let fixture: ComponentFixture<Comp4900Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4900Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4900Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
