import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2972Component } from './comp-2972.component';

describe('Comp2972Component', () => {
  let component: Comp2972Component;
  let fixture: ComponentFixture<Comp2972Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2972Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2972Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
