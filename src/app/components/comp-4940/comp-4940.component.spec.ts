import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4940Component } from './comp-4940.component';

describe('Comp4940Component', () => {
  let component: Comp4940Component;
  let fixture: ComponentFixture<Comp4940Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4940Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4940Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
