import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3878Component } from './comp-3878.component';

describe('Comp3878Component', () => {
  let component: Comp3878Component;
  let fixture: ComponentFixture<Comp3878Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3878Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3878Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
