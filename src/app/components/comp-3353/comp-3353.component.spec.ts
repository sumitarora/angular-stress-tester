import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3353Component } from './comp-3353.component';

describe('Comp3353Component', () => {
  let component: Comp3353Component;
  let fixture: ComponentFixture<Comp3353Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3353Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3353Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
