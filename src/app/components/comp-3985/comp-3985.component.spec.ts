import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3985Component } from './comp-3985.component';

describe('Comp3985Component', () => {
  let component: Comp3985Component;
  let fixture: ComponentFixture<Comp3985Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3985Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3985Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
