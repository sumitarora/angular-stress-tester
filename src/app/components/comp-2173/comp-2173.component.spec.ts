import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2173Component } from './comp-2173.component';

describe('Comp2173Component', () => {
  let component: Comp2173Component;
  let fixture: ComponentFixture<Comp2173Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2173Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2173Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
