import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4101Component } from './comp-4101.component';

describe('Comp4101Component', () => {
  let component: Comp4101Component;
  let fixture: ComponentFixture<Comp4101Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4101Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4101Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
