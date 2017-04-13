import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2680Component } from './comp-2680.component';

describe('Comp2680Component', () => {
  let component: Comp2680Component;
  let fixture: ComponentFixture<Comp2680Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2680Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2680Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
