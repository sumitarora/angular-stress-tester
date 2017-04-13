import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3983Component } from './comp-3983.component';

describe('Comp3983Component', () => {
  let component: Comp3983Component;
  let fixture: ComponentFixture<Comp3983Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3983Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3983Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
