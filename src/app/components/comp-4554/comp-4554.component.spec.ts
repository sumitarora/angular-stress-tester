import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4554Component } from './comp-4554.component';

describe('Comp4554Component', () => {
  let component: Comp4554Component;
  let fixture: ComponentFixture<Comp4554Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4554Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4554Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
