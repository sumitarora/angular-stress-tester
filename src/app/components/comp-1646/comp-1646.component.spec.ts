import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1646Component } from './comp-1646.component';

describe('Comp1646Component', () => {
  let component: Comp1646Component;
  let fixture: ComponentFixture<Comp1646Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1646Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1646Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
