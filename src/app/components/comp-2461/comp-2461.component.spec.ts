import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2461Component } from './comp-2461.component';

describe('Comp2461Component', () => {
  let component: Comp2461Component;
  let fixture: ComponentFixture<Comp2461Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2461Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2461Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
