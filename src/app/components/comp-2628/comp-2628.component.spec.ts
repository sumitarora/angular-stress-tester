import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2628Component } from './comp-2628.component';

describe('Comp2628Component', () => {
  let component: Comp2628Component;
  let fixture: ComponentFixture<Comp2628Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2628Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2628Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
