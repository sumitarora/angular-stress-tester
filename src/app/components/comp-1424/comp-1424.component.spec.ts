import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1424Component } from './comp-1424.component';

describe('Comp1424Component', () => {
  let component: Comp1424Component;
  let fixture: ComponentFixture<Comp1424Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1424Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1424Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
