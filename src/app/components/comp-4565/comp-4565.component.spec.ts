import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4565Component } from './comp-4565.component';

describe('Comp4565Component', () => {
  let component: Comp4565Component;
  let fixture: ComponentFixture<Comp4565Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4565Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4565Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
