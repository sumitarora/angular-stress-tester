import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2118Component } from './comp-2118.component';

describe('Comp2118Component', () => {
  let component: Comp2118Component;
  let fixture: ComponentFixture<Comp2118Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2118Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2118Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
