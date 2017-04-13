import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3170Component } from './comp-3170.component';

describe('Comp3170Component', () => {
  let component: Comp3170Component;
  let fixture: ComponentFixture<Comp3170Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3170Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3170Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
