import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2020Component } from './comp-2020.component';

describe('Comp2020Component', () => {
  let component: Comp2020Component;
  let fixture: ComponentFixture<Comp2020Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2020Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2020Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
