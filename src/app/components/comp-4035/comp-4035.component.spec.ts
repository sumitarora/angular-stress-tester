import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4035Component } from './comp-4035.component';

describe('Comp4035Component', () => {
  let component: Comp4035Component;
  let fixture: ComponentFixture<Comp4035Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4035Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4035Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
