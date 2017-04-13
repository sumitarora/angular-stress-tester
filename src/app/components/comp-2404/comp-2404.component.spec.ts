import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2404Component } from './comp-2404.component';

describe('Comp2404Component', () => {
  let component: Comp2404Component;
  let fixture: ComponentFixture<Comp2404Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2404Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2404Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
