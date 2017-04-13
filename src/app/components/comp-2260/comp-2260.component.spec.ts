import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2260Component } from './comp-2260.component';

describe('Comp2260Component', () => {
  let component: Comp2260Component;
  let fixture: ComponentFixture<Comp2260Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2260Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2260Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
