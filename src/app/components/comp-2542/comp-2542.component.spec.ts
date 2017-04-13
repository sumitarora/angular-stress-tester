import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2542Component } from './comp-2542.component';

describe('Comp2542Component', () => {
  let component: Comp2542Component;
  let fixture: ComponentFixture<Comp2542Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2542Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2542Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
