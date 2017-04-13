import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3540Component } from './comp-3540.component';

describe('Comp3540Component', () => {
  let component: Comp3540Component;
  let fixture: ComponentFixture<Comp3540Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3540Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3540Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
