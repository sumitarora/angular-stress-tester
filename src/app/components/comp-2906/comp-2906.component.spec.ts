import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2906Component } from './comp-2906.component';

describe('Comp2906Component', () => {
  let component: Comp2906Component;
  let fixture: ComponentFixture<Comp2906Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2906Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2906Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
