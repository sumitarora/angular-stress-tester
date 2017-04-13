import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4765Component } from './comp-4765.component';

describe('Comp4765Component', () => {
  let component: Comp4765Component;
  let fixture: ComponentFixture<Comp4765Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4765Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4765Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
