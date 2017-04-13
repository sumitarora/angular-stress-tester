import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4009Component } from './comp-4009.component';

describe('Comp4009Component', () => {
  let component: Comp4009Component;
  let fixture: ComponentFixture<Comp4009Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4009Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4009Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
