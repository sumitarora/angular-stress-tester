import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4171Component } from './comp-4171.component';

describe('Comp4171Component', () => {
  let component: Comp4171Component;
  let fixture: ComponentFixture<Comp4171Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4171Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4171Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
