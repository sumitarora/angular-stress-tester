import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4911Component } from './comp-4911.component';

describe('Comp4911Component', () => {
  let component: Comp4911Component;
  let fixture: ComponentFixture<Comp4911Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4911Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4911Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
