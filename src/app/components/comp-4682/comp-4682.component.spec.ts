import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4682Component } from './comp-4682.component';

describe('Comp4682Component', () => {
  let component: Comp4682Component;
  let fixture: ComponentFixture<Comp4682Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4682Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4682Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
