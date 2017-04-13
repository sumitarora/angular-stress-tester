import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3310Component } from './comp-3310.component';

describe('Comp3310Component', () => {
  let component: Comp3310Component;
  let fixture: ComponentFixture<Comp3310Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3310Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3310Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
