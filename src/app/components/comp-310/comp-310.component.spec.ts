import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp310Component } from './comp-310.component';

describe('Comp310Component', () => {
  let component: Comp310Component;
  let fixture: ComponentFixture<Comp310Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp310Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp310Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
