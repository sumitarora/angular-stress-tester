import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4770Component } from './comp-4770.component';

describe('Comp4770Component', () => {
  let component: Comp4770Component;
  let fixture: ComponentFixture<Comp4770Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4770Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4770Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
