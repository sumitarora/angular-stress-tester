import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4233Component } from './comp-4233.component';

describe('Comp4233Component', () => {
  let component: Comp4233Component;
  let fixture: ComponentFixture<Comp4233Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4233Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4233Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
