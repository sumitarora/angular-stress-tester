import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1734Component } from './comp-1734.component';

describe('Comp1734Component', () => {
  let component: Comp1734Component;
  let fixture: ComponentFixture<Comp1734Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1734Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1734Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
