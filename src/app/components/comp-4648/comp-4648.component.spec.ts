import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4648Component } from './comp-4648.component';

describe('Comp4648Component', () => {
  let component: Comp4648Component;
  let fixture: ComponentFixture<Comp4648Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4648Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4648Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
