import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4592Component } from './comp-4592.component';

describe('Comp4592Component', () => {
  let component: Comp4592Component;
  let fixture: ComponentFixture<Comp4592Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4592Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4592Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
