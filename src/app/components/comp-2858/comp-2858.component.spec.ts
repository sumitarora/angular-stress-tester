import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2858Component } from './comp-2858.component';

describe('Comp2858Component', () => {
  let component: Comp2858Component;
  let fixture: ComponentFixture<Comp2858Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2858Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2858Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
