import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3605Component } from './comp-3605.component';

describe('Comp3605Component', () => {
  let component: Comp3605Component;
  let fixture: ComponentFixture<Comp3605Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3605Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3605Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});