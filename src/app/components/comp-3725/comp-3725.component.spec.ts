import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3725Component } from './comp-3725.component';

describe('Comp3725Component', () => {
  let component: Comp3725Component;
  let fixture: ComponentFixture<Comp3725Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3725Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3725Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
