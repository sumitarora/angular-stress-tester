import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2248Component } from './comp-2248.component';

describe('Comp2248Component', () => {
  let component: Comp2248Component;
  let fixture: ComponentFixture<Comp2248Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2248Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2248Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
