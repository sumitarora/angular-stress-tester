import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4992Component } from './comp-4992.component';

describe('Comp4992Component', () => {
  let component: Comp4992Component;
  let fixture: ComponentFixture<Comp4992Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4992Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4992Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
