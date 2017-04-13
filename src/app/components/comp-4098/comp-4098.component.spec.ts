import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4098Component } from './comp-4098.component';

describe('Comp4098Component', () => {
  let component: Comp4098Component;
  let fixture: ComponentFixture<Comp4098Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4098Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4098Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
