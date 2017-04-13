import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4192Component } from './comp-4192.component';

describe('Comp4192Component', () => {
  let component: Comp4192Component;
  let fixture: ComponentFixture<Comp4192Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4192Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4192Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
