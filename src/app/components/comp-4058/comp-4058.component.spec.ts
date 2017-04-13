import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4058Component } from './comp-4058.component';

describe('Comp4058Component', () => {
  let component: Comp4058Component;
  let fixture: ComponentFixture<Comp4058Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4058Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4058Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
