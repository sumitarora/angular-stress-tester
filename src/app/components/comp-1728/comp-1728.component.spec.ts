import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1728Component } from './comp-1728.component';

describe('Comp1728Component', () => {
  let component: Comp1728Component;
  let fixture: ComponentFixture<Comp1728Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1728Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1728Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
