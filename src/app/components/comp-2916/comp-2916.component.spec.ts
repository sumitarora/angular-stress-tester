import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2916Component } from './comp-2916.component';

describe('Comp2916Component', () => {
  let component: Comp2916Component;
  let fixture: ComponentFixture<Comp2916Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2916Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2916Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
