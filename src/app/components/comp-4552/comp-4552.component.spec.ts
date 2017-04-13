import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4552Component } from './comp-4552.component';

describe('Comp4552Component', () => {
  let component: Comp4552Component;
  let fixture: ComponentFixture<Comp4552Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4552Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4552Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
