import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4640Component } from './comp-4640.component';

describe('Comp4640Component', () => {
  let component: Comp4640Component;
  let fixture: ComponentFixture<Comp4640Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4640Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4640Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
