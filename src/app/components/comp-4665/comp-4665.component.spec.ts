import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4665Component } from './comp-4665.component';

describe('Comp4665Component', () => {
  let component: Comp4665Component;
  let fixture: ComponentFixture<Comp4665Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4665Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4665Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
