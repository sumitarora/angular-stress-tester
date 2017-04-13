import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2128Component } from './comp-2128.component';

describe('Comp2128Component', () => {
  let component: Comp2128Component;
  let fixture: ComponentFixture<Comp2128Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2128Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2128Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
