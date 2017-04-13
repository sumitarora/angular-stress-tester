import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2395Component } from './comp-2395.component';

describe('Comp2395Component', () => {
  let component: Comp2395Component;
  let fixture: ComponentFixture<Comp2395Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2395Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2395Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
