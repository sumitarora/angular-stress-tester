import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2285Component } from './comp-2285.component';

describe('Comp2285Component', () => {
  let component: Comp2285Component;
  let fixture: ComponentFixture<Comp2285Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2285Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2285Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
