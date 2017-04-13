import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4074Component } from './comp-4074.component';

describe('Comp4074Component', () => {
  let component: Comp4074Component;
  let fixture: ComponentFixture<Comp4074Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4074Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4074Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
