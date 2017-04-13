import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4178Component } from './comp-4178.component';

describe('Comp4178Component', () => {
  let component: Comp4178Component;
  let fixture: ComponentFixture<Comp4178Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4178Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4178Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
