import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2210Component } from './comp-2210.component';

describe('Comp2210Component', () => {
  let component: Comp2210Component;
  let fixture: ComponentFixture<Comp2210Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2210Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2210Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
