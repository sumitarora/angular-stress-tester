import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2557Component } from './comp-2557.component';

describe('Comp2557Component', () => {
  let component: Comp2557Component;
  let fixture: ComponentFixture<Comp2557Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2557Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2557Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
