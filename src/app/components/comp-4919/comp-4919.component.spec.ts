import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4919Component } from './comp-4919.component';

describe('Comp4919Component', () => {
  let component: Comp4919Component;
  let fixture: ComponentFixture<Comp4919Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4919Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4919Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
