import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1204Component } from './comp-1204.component';

describe('Comp1204Component', () => {
  let component: Comp1204Component;
  let fixture: ComponentFixture<Comp1204Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1204Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1204Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
