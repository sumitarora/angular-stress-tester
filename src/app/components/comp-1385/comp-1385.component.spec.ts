import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1385Component } from './comp-1385.component';

describe('Comp1385Component', () => {
  let component: Comp1385Component;
  let fixture: ComponentFixture<Comp1385Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1385Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1385Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
