import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4110Component } from './comp-4110.component';

describe('Comp4110Component', () => {
  let component: Comp4110Component;
  let fixture: ComponentFixture<Comp4110Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4110Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4110Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
