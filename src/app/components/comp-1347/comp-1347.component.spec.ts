import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1347Component } from './comp-1347.component';

describe('Comp1347Component', () => {
  let component: Comp1347Component;
  let fixture: ComponentFixture<Comp1347Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1347Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1347Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
