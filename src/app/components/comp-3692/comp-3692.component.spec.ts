import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3692Component } from './comp-3692.component';

describe('Comp3692Component', () => {
  let component: Comp3692Component;
  let fixture: ComponentFixture<Comp3692Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3692Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3692Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
