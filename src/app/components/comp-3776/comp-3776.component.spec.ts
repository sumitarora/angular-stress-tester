import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3776Component } from './comp-3776.component';

describe('Comp3776Component', () => {
  let component: Comp3776Component;
  let fixture: ComponentFixture<Comp3776Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3776Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3776Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
