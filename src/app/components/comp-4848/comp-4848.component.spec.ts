import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4848Component } from './comp-4848.component';

describe('Comp4848Component', () => {
  let component: Comp4848Component;
  let fixture: ComponentFixture<Comp4848Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4848Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4848Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
