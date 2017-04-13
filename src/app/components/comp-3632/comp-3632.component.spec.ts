import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3632Component } from './comp-3632.component';

describe('Comp3632Component', () => {
  let component: Comp3632Component;
  let fixture: ComponentFixture<Comp3632Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3632Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3632Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
