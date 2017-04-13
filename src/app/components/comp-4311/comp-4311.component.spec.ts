import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4311Component } from './comp-4311.component';

describe('Comp4311Component', () => {
  let component: Comp4311Component;
  let fixture: ComponentFixture<Comp4311Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4311Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4311Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
