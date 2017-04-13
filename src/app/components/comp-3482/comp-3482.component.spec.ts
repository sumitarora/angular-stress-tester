import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3482Component } from './comp-3482.component';

describe('Comp3482Component', () => {
  let component: Comp3482Component;
  let fixture: ComponentFixture<Comp3482Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3482Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3482Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
