import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4749Component } from './comp-4749.component';

describe('Comp4749Component', () => {
  let component: Comp4749Component;
  let fixture: ComponentFixture<Comp4749Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4749Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4749Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
