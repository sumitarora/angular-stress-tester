import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2358Component } from './comp-2358.component';

describe('Comp2358Component', () => {
  let component: Comp2358Component;
  let fixture: ComponentFixture<Comp2358Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2358Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2358Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
