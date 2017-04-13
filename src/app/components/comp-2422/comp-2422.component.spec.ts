import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2422Component } from './comp-2422.component';

describe('Comp2422Component', () => {
  let component: Comp2422Component;
  let fixture: ComponentFixture<Comp2422Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2422Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2422Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
