import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2981Component } from './comp-2981.component';

describe('Comp2981Component', () => {
  let component: Comp2981Component;
  let fixture: ComponentFixture<Comp2981Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2981Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2981Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
