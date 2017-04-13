import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2519Component } from './comp-2519.component';

describe('Comp2519Component', () => {
  let component: Comp2519Component;
  let fixture: ComponentFixture<Comp2519Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2519Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2519Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
