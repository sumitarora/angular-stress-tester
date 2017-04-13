import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2549Component } from './comp-2549.component';

describe('Comp2549Component', () => {
  let component: Comp2549Component;
  let fixture: ComponentFixture<Comp2549Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2549Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2549Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
