import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4468Component } from './comp-4468.component';

describe('Comp4468Component', () => {
  let component: Comp4468Component;
  let fixture: ComponentFixture<Comp4468Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4468Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4468Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
