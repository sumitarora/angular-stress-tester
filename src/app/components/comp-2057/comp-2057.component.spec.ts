import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2057Component } from './comp-2057.component';

describe('Comp2057Component', () => {
  let component: Comp2057Component;
  let fixture: ComponentFixture<Comp2057Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2057Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2057Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
