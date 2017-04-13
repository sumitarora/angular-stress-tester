import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2384Component } from './comp-2384.component';

describe('Comp2384Component', () => {
  let component: Comp2384Component;
  let fixture: ComponentFixture<Comp2384Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2384Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2384Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
