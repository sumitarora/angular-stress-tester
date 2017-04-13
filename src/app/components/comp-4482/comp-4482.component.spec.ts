import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4482Component } from './comp-4482.component';

describe('Comp4482Component', () => {
  let component: Comp4482Component;
  let fixture: ComponentFixture<Comp4482Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4482Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4482Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
