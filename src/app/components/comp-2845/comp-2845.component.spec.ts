import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2845Component } from './comp-2845.component';

describe('Comp2845Component', () => {
  let component: Comp2845Component;
  let fixture: ComponentFixture<Comp2845Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2845Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2845Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
