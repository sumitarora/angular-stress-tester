import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3367Component } from './comp-3367.component';

describe('Comp3367Component', () => {
  let component: Comp3367Component;
  let fixture: ComponentFixture<Comp3367Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3367Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3367Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
