import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4139Component } from './comp-4139.component';

describe('Comp4139Component', () => {
  let component: Comp4139Component;
  let fixture: ComponentFixture<Comp4139Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4139Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4139Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
