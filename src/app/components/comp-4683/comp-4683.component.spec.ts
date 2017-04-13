import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4683Component } from './comp-4683.component';

describe('Comp4683Component', () => {
  let component: Comp4683Component;
  let fixture: ComponentFixture<Comp4683Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4683Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4683Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
