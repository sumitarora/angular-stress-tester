import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2656Component } from './comp-2656.component';

describe('Comp2656Component', () => {
  let component: Comp2656Component;
  let fixture: ComponentFixture<Comp2656Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2656Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2656Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
