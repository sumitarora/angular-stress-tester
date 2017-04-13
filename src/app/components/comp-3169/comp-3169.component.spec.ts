import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3169Component } from './comp-3169.component';

describe('Comp3169Component', () => {
  let component: Comp3169Component;
  let fixture: ComponentFixture<Comp3169Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3169Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3169Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
