import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3755Component } from './comp-3755.component';

describe('Comp3755Component', () => {
  let component: Comp3755Component;
  let fixture: ComponentFixture<Comp3755Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3755Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3755Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
