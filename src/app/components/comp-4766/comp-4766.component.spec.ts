import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4766Component } from './comp-4766.component';

describe('Comp4766Component', () => {
  let component: Comp4766Component;
  let fixture: ComponentFixture<Comp4766Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4766Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4766Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
