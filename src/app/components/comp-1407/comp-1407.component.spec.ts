import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1407Component } from './comp-1407.component';

describe('Comp1407Component', () => {
  let component: Comp1407Component;
  let fixture: ComponentFixture<Comp1407Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1407Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1407Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
