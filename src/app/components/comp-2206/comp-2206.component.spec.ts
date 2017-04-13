import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2206Component } from './comp-2206.component';

describe('Comp2206Component', () => {
  let component: Comp2206Component;
  let fixture: ComponentFixture<Comp2206Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2206Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2206Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
