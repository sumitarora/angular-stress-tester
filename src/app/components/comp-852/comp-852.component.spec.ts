import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp852Component } from './comp-852.component';

describe('Comp852Component', () => {
  let component: Comp852Component;
  let fixture: ComponentFixture<Comp852Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp852Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp852Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
