import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4895Component } from './comp-4895.component';

describe('Comp4895Component', () => {
  let component: Comp4895Component;
  let fixture: ComponentFixture<Comp4895Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4895Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4895Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
