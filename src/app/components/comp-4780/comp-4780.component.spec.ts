import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4780Component } from './comp-4780.component';

describe('Comp4780Component', () => {
  let component: Comp4780Component;
  let fixture: ComponentFixture<Comp4780Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4780Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4780Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
