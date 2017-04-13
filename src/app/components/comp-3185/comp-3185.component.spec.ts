import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3185Component } from './comp-3185.component';

describe('Comp3185Component', () => {
  let component: Comp3185Component;
  let fixture: ComponentFixture<Comp3185Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3185Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3185Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
