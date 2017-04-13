import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2359Component } from './comp-2359.component';

describe('Comp2359Component', () => {
  let component: Comp2359Component;
  let fixture: ComponentFixture<Comp2359Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2359Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2359Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
