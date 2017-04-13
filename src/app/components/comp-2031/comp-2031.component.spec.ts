import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2031Component } from './comp-2031.component';

describe('Comp2031Component', () => {
  let component: Comp2031Component;
  let fixture: ComponentFixture<Comp2031Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2031Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2031Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
