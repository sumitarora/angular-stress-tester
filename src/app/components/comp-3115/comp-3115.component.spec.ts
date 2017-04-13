import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3115Component } from './comp-3115.component';

describe('Comp3115Component', () => {
  let component: Comp3115Component;
  let fixture: ComponentFixture<Comp3115Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3115Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3115Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
