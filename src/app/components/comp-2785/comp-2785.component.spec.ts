import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2785Component } from './comp-2785.component';

describe('Comp2785Component', () => {
  let component: Comp2785Component;
  let fixture: ComponentFixture<Comp2785Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2785Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2785Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
