import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2890Component } from './comp-2890.component';

describe('Comp2890Component', () => {
  let component: Comp2890Component;
  let fixture: ComponentFixture<Comp2890Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2890Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2890Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
