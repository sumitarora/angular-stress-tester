import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4366Component } from './comp-4366.component';

describe('Comp4366Component', () => {
  let component: Comp4366Component;
  let fixture: ComponentFixture<Comp4366Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4366Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4366Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
