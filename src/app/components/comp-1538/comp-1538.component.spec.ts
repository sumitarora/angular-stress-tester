import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1538Component } from './comp-1538.component';

describe('Comp1538Component', () => {
  let component: Comp1538Component;
  let fixture: ComponentFixture<Comp1538Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1538Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1538Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
