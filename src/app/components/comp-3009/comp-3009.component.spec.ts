import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3009Component } from './comp-3009.component';

describe('Comp3009Component', () => {
  let component: Comp3009Component;
  let fixture: ComponentFixture<Comp3009Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3009Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3009Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
