import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4360Component } from './comp-4360.component';

describe('Comp4360Component', () => {
  let component: Comp4360Component;
  let fixture: ComponentFixture<Comp4360Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4360Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4360Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
