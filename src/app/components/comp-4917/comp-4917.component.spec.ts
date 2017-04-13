import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4917Component } from './comp-4917.component';

describe('Comp4917Component', () => {
  let component: Comp4917Component;
  let fixture: ComponentFixture<Comp4917Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4917Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4917Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
