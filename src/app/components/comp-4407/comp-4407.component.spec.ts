import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4407Component } from './comp-4407.component';

describe('Comp4407Component', () => {
  let component: Comp4407Component;
  let fixture: ComponentFixture<Comp4407Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4407Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4407Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
