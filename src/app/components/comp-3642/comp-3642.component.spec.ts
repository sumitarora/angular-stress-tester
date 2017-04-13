import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3642Component } from './comp-3642.component';

describe('Comp3642Component', () => {
  let component: Comp3642Component;
  let fixture: ComponentFixture<Comp3642Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3642Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3642Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
