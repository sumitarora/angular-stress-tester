import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3160Component } from './comp-3160.component';

describe('Comp3160Component', () => {
  let component: Comp3160Component;
  let fixture: ComponentFixture<Comp3160Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3160Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3160Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
