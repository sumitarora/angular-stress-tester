import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4422Component } from './comp-4422.component';

describe('Comp4422Component', () => {
  let component: Comp4422Component;
  let fixture: ComponentFixture<Comp4422Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4422Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4422Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
