import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2244Component } from './comp-2244.component';

describe('Comp2244Component', () => {
  let component: Comp2244Component;
  let fixture: ComponentFixture<Comp2244Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2244Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2244Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
