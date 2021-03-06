import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3440Component } from './comp-3440.component';

describe('Comp3440Component', () => {
  let component: Comp3440Component;
  let fixture: ComponentFixture<Comp3440Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3440Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3440Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
