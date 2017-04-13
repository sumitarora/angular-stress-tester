import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4495Component } from './comp-4495.component';

describe('Comp4495Component', () => {
  let component: Comp4495Component;
  let fixture: ComponentFixture<Comp4495Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4495Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4495Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
