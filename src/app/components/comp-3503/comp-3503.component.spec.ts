import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3503Component } from './comp-3503.component';

describe('Comp3503Component', () => {
  let component: Comp3503Component;
  let fixture: ComponentFixture<Comp3503Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3503Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3503Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
