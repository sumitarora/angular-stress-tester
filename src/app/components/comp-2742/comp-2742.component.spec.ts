import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2742Component } from './comp-2742.component';

describe('Comp2742Component', () => {
  let component: Comp2742Component;
  let fixture: ComponentFixture<Comp2742Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2742Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2742Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
