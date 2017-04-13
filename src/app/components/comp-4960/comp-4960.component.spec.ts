import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4960Component } from './comp-4960.component';

describe('Comp4960Component', () => {
  let component: Comp4960Component;
  let fixture: ComponentFixture<Comp4960Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4960Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4960Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
