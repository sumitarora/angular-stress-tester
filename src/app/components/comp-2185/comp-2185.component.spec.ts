import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2185Component } from './comp-2185.component';

describe('Comp2185Component', () => {
  let component: Comp2185Component;
  let fixture: ComponentFixture<Comp2185Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2185Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2185Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
