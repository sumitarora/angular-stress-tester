import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4077Component } from './comp-4077.component';

describe('Comp4077Component', () => {
  let component: Comp4077Component;
  let fixture: ComponentFixture<Comp4077Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4077Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4077Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
