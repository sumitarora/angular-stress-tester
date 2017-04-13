import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2747Component } from './comp-2747.component';

describe('Comp2747Component', () => {
  let component: Comp2747Component;
  let fixture: ComponentFixture<Comp2747Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2747Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2747Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
