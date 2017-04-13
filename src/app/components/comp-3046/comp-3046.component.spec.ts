import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3046Component } from './comp-3046.component';

describe('Comp3046Component', () => {
  let component: Comp3046Component;
  let fixture: ComponentFixture<Comp3046Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3046Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3046Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
