import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4936Component } from './comp-4936.component';

describe('Comp4936Component', () => {
  let component: Comp4936Component;
  let fixture: ComponentFixture<Comp4936Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4936Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4936Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
