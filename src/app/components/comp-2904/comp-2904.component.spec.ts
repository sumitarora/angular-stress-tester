import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2904Component } from './comp-2904.component';

describe('Comp2904Component', () => {
  let component: Comp2904Component;
  let fixture: ComponentFixture<Comp2904Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2904Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2904Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
