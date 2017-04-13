import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2181Component } from './comp-2181.component';

describe('Comp2181Component', () => {
  let component: Comp2181Component;
  let fixture: ComponentFixture<Comp2181Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2181Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2181Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
