import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2271Component } from './comp-2271.component';

describe('Comp2271Component', () => {
  let component: Comp2271Component;
  let fixture: ComponentFixture<Comp2271Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2271Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2271Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
