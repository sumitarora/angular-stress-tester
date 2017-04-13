import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3956Component } from './comp-3956.component';

describe('Comp3956Component', () => {
  let component: Comp3956Component;
  let fixture: ComponentFixture<Comp3956Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3956Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3956Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
