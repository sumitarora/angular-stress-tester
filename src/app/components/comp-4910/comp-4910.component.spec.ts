import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4910Component } from './comp-4910.component';

describe('Comp4910Component', () => {
  let component: Comp4910Component;
  let fixture: ComponentFixture<Comp4910Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4910Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4910Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
