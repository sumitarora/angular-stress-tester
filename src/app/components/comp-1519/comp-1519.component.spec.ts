import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1519Component } from './comp-1519.component';

describe('Comp1519Component', () => {
  let component: Comp1519Component;
  let fixture: ComponentFixture<Comp1519Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1519Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1519Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
