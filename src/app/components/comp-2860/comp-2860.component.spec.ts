import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2860Component } from './comp-2860.component';

describe('Comp2860Component', () => {
  let component: Comp2860Component;
  let fixture: ComponentFixture<Comp2860Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2860Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2860Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
