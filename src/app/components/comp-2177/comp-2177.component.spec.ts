import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2177Component } from './comp-2177.component';

describe('Comp2177Component', () => {
  let component: Comp2177Component;
  let fixture: ComponentFixture<Comp2177Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2177Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2177Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
