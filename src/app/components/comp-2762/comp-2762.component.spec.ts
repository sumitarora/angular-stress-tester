import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2762Component } from './comp-2762.component';

describe('Comp2762Component', () => {
  let component: Comp2762Component;
  let fixture: ComponentFixture<Comp2762Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2762Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2762Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
