import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4039Component } from './comp-4039.component';

describe('Comp4039Component', () => {
  let component: Comp4039Component;
  let fixture: ComponentFixture<Comp4039Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4039Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4039Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
