import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1354Component } from './comp-1354.component';

describe('Comp1354Component', () => {
  let component: Comp1354Component;
  let fixture: ComponentFixture<Comp1354Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1354Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1354Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
