import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2548Component } from './comp-2548.component';

describe('Comp2548Component', () => {
  let component: Comp2548Component;
  let fixture: ComponentFixture<Comp2548Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2548Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2548Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
