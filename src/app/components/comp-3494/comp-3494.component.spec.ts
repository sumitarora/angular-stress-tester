import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3494Component } from './comp-3494.component';

describe('Comp3494Component', () => {
  let component: Comp3494Component;
  let fixture: ComponentFixture<Comp3494Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3494Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3494Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
