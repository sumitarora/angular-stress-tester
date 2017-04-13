import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3255Component } from './comp-3255.component';

describe('Comp3255Component', () => {
  let component: Comp3255Component;
  let fixture: ComponentFixture<Comp3255Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3255Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3255Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
