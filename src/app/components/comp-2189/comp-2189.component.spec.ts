import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2189Component } from './comp-2189.component';

describe('Comp2189Component', () => {
  let component: Comp2189Component;
  let fixture: ComponentFixture<Comp2189Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2189Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2189Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
