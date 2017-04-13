import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4180Component } from './comp-4180.component';

describe('Comp4180Component', () => {
  let component: Comp4180Component;
  let fixture: ComponentFixture<Comp4180Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4180Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4180Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
