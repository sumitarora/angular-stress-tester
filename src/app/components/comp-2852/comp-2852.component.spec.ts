import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2852Component } from './comp-2852.component';

describe('Comp2852Component', () => {
  let component: Comp2852Component;
  let fixture: ComponentFixture<Comp2852Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2852Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2852Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
