import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2547Component } from './comp-2547.component';

describe('Comp2547Component', () => {
  let component: Comp2547Component;
  let fixture: ComponentFixture<Comp2547Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2547Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2547Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
