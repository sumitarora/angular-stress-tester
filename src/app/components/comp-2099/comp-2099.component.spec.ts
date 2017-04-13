import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2099Component } from './comp-2099.component';

describe('Comp2099Component', () => {
  let component: Comp2099Component;
  let fixture: ComponentFixture<Comp2099Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2099Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2099Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
