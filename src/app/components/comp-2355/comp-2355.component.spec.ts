import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2355Component } from './comp-2355.component';

describe('Comp2355Component', () => {
  let component: Comp2355Component;
  let fixture: ComponentFixture<Comp2355Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2355Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2355Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
