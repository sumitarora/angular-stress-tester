import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3992Component } from './comp-3992.component';

describe('Comp3992Component', () => {
  let component: Comp3992Component;
  let fixture: ComponentFixture<Comp3992Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3992Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3992Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
