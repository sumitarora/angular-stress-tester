import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp825Component } from './comp-825.component';

describe('Comp825Component', () => {
  let component: Comp825Component;
  let fixture: ComponentFixture<Comp825Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp825Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp825Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
