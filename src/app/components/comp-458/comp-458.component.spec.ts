import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp458Component } from './comp-458.component';

describe('Comp458Component', () => {
  let component: Comp458Component;
  let fixture: ComponentFixture<Comp458Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp458Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp458Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
