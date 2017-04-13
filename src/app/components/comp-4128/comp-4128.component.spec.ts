import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4128Component } from './comp-4128.component';

describe('Comp4128Component', () => {
  let component: Comp4128Component;
  let fixture: ComponentFixture<Comp4128Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4128Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4128Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
