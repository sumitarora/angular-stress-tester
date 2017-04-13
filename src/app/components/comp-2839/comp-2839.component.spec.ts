import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2839Component } from './comp-2839.component';

describe('Comp2839Component', () => {
  let component: Comp2839Component;
  let fixture: ComponentFixture<Comp2839Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2839Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2839Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
