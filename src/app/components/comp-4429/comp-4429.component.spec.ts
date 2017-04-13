import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4429Component } from './comp-4429.component';

describe('Comp4429Component', () => {
  let component: Comp4429Component;
  let fixture: ComponentFixture<Comp4429Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4429Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4429Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
