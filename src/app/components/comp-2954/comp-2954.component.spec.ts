import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2954Component } from './comp-2954.component';

describe('Comp2954Component', () => {
  let component: Comp2954Component;
  let fixture: ComponentFixture<Comp2954Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2954Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2954Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
