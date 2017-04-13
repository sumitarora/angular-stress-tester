import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2940Component } from './comp-2940.component';

describe('Comp2940Component', () => {
  let component: Comp2940Component;
  let fixture: ComponentFixture<Comp2940Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2940Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2940Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
