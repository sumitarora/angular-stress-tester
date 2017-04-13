import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2312Component } from './comp-2312.component';

describe('Comp2312Component', () => {
  let component: Comp2312Component;
  let fixture: ComponentFixture<Comp2312Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2312Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2312Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
