import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3854Component } from './comp-3854.component';

describe('Comp3854Component', () => {
  let component: Comp3854Component;
  let fixture: ComponentFixture<Comp3854Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3854Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3854Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
