import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2090Component } from './comp-2090.component';

describe('Comp2090Component', () => {
  let component: Comp2090Component;
  let fixture: ComponentFixture<Comp2090Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2090Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2090Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
