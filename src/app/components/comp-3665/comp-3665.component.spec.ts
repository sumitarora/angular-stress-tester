import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3665Component } from './comp-3665.component';

describe('Comp3665Component', () => {
  let component: Comp3665Component;
  let fixture: ComponentFixture<Comp3665Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3665Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3665Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
