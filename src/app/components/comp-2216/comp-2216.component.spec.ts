import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2216Component } from './comp-2216.component';

describe('Comp2216Component', () => {
  let component: Comp2216Component;
  let fixture: ComponentFixture<Comp2216Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2216Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2216Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
