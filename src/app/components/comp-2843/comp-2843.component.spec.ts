import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2843Component } from './comp-2843.component';

describe('Comp2843Component', () => {
  let component: Comp2843Component;
  let fixture: ComponentFixture<Comp2843Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2843Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2843Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
