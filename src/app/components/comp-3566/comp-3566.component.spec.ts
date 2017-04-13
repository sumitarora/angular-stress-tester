import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3566Component } from './comp-3566.component';

describe('Comp3566Component', () => {
  let component: Comp3566Component;
  let fixture: ComponentFixture<Comp3566Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3566Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3566Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
