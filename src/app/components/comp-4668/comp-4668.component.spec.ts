import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4668Component } from './comp-4668.component';

describe('Comp4668Component', () => {
  let component: Comp4668Component;
  let fixture: ComponentFixture<Comp4668Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4668Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4668Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
