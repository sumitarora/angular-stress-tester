import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4309Component } from './comp-4309.component';

describe('Comp4309Component', () => {
  let component: Comp4309Component;
  let fixture: ComponentFixture<Comp4309Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4309Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4309Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
