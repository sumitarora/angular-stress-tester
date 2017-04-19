import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4880Component } from './comp-4880.component';

describe('Comp4880Component', () => {
  let component: Comp4880Component;
  let fixture: ComponentFixture<Comp4880Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4880Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4880Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});