import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4922Component } from './comp-4922.component';

describe('Comp4922Component', () => {
  let component: Comp4922Component;
  let fixture: ComponentFixture<Comp4922Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4922Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4922Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
