import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4897Component } from './comp-4897.component';

describe('Comp4897Component', () => {
  let component: Comp4897Component;
  let fixture: ComponentFixture<Comp4897Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4897Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4897Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
