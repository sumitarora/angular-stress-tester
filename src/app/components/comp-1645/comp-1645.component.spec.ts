import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1645Component } from './comp-1645.component';

describe('Comp1645Component', () => {
  let component: Comp1645Component;
  let fixture: ComponentFixture<Comp1645Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1645Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1645Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
