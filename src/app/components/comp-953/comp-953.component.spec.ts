import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp953Component } from './comp-953.component';

describe('Comp953Component', () => {
  let component: Comp953Component;
  let fixture: ComponentFixture<Comp953Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp953Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp953Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
