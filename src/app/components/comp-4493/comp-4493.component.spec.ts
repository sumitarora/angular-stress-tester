import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4493Component } from './comp-4493.component';

describe('Comp4493Component', () => {
  let component: Comp4493Component;
  let fixture: ComponentFixture<Comp4493Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4493Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4493Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
