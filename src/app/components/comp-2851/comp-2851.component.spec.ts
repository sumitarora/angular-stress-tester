import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2851Component } from './comp-2851.component';

describe('Comp2851Component', () => {
  let component: Comp2851Component;
  let fixture: ComponentFixture<Comp2851Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2851Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2851Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
