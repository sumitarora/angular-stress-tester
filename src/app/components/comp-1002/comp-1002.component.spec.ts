import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1002Component } from './comp-1002.component';

describe('Comp1002Component', () => {
  let component: Comp1002Component;
  let fixture: ComponentFixture<Comp1002Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1002Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1002Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
