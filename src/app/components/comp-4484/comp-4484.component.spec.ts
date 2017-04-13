import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4484Component } from './comp-4484.component';

describe('Comp4484Component', () => {
  let component: Comp4484Component;
  let fixture: ComponentFixture<Comp4484Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4484Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4484Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
