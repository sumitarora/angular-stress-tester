import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4312Component } from './comp-4312.component';

describe('Comp4312Component', () => {
  let component: Comp4312Component;
  let fixture: ComponentFixture<Comp4312Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4312Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4312Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
