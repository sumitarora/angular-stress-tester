import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4241Component } from './comp-4241.component';

describe('Comp4241Component', () => {
  let component: Comp4241Component;
  let fixture: ComponentFixture<Comp4241Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4241Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4241Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
