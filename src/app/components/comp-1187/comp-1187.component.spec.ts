import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1187Component } from './comp-1187.component';

describe('Comp1187Component', () => {
  let component: Comp1187Component;
  let fixture: ComponentFixture<Comp1187Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1187Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1187Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
