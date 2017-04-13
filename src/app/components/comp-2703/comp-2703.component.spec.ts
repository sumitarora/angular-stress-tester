import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2703Component } from './comp-2703.component';

describe('Comp2703Component', () => {
  let component: Comp2703Component;
  let fixture: ComponentFixture<Comp2703Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2703Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2703Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
