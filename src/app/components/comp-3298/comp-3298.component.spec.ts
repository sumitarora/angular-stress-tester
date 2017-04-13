import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3298Component } from './comp-3298.component';

describe('Comp3298Component', () => {
  let component: Comp3298Component;
  let fixture: ComponentFixture<Comp3298Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3298Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3298Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
