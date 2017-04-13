import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2033Component } from './comp-2033.component';

describe('Comp2033Component', () => {
  let component: Comp2033Component;
  let fixture: ComponentFixture<Comp2033Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2033Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2033Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
