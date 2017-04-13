import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3054Component } from './comp-3054.component';

describe('Comp3054Component', () => {
  let component: Comp3054Component;
  let fixture: ComponentFixture<Comp3054Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3054Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3054Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
