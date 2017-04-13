import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2188Component } from './comp-2188.component';

describe('Comp2188Component', () => {
  let component: Comp2188Component;
  let fixture: ComponentFixture<Comp2188Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2188Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2188Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
