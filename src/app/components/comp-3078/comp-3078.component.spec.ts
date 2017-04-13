import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3078Component } from './comp-3078.component';

describe('Comp3078Component', () => {
  let component: Comp3078Component;
  let fixture: ComponentFixture<Comp3078Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3078Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3078Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
