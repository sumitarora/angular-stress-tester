import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2178Component } from './comp-2178.component';

describe('Comp2178Component', () => {
  let component: Comp2178Component;
  let fixture: ComponentFixture<Comp2178Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2178Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2178Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
