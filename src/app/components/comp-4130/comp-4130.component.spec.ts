import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4130Component } from './comp-4130.component';

describe('Comp4130Component', () => {
  let component: Comp4130Component;
  let fixture: ComponentFixture<Comp4130Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4130Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4130Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
