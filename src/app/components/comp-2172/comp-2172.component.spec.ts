import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2172Component } from './comp-2172.component';

describe('Comp2172Component', () => {
  let component: Comp2172Component;
  let fixture: ComponentFixture<Comp2172Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2172Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2172Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
