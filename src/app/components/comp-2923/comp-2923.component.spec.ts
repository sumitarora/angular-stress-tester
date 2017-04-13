import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2923Component } from './comp-2923.component';

describe('Comp2923Component', () => {
  let component: Comp2923Component;
  let fixture: ComponentFixture<Comp2923Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2923Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2923Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
