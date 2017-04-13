import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4465Component } from './comp-4465.component';

describe('Comp4465Component', () => {
  let component: Comp4465Component;
  let fixture: ComponentFixture<Comp4465Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4465Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4465Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
