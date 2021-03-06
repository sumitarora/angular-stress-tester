import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1974Component } from './comp-1974.component';

describe('Comp1974Component', () => {
  let component: Comp1974Component;
  let fixture: ComponentFixture<Comp1974Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1974Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1974Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
