import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2490Component } from './comp-2490.component';

describe('Comp2490Component', () => {
  let component: Comp2490Component;
  let fixture: ComponentFixture<Comp2490Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2490Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2490Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
