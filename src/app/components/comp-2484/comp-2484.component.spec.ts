import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2484Component } from './comp-2484.component';

describe('Comp2484Component', () => {
  let component: Comp2484Component;
  let fixture: ComponentFixture<Comp2484Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2484Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2484Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
