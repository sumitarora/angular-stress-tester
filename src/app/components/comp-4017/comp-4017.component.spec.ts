import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4017Component } from './comp-4017.component';

describe('Comp4017Component', () => {
  let component: Comp4017Component;
  let fixture: ComponentFixture<Comp4017Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4017Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4017Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
