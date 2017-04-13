import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2531Component } from './comp-2531.component';

describe('Comp2531Component', () => {
  let component: Comp2531Component;
  let fixture: ComponentFixture<Comp2531Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2531Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2531Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
