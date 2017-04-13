import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4950Component } from './comp-4950.component';

describe('Comp4950Component', () => {
  let component: Comp4950Component;
  let fixture: ComponentFixture<Comp4950Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4950Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4950Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
