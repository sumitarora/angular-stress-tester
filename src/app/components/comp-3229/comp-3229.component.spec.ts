import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3229Component } from './comp-3229.component';

describe('Comp3229Component', () => {
  let component: Comp3229Component;
  let fixture: ComponentFixture<Comp3229Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3229Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3229Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
