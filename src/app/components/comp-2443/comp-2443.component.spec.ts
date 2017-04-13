import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2443Component } from './comp-2443.component';

describe('Comp2443Component', () => {
  let component: Comp2443Component;
  let fixture: ComponentFixture<Comp2443Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2443Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2443Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
