import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2147Component } from './comp-2147.component';

describe('Comp2147Component', () => {
  let component: Comp2147Component;
  let fixture: ComponentFixture<Comp2147Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2147Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2147Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
