import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3508Component } from './comp-3508.component';

describe('Comp3508Component', () => {
  let component: Comp3508Component;
  let fixture: ComponentFixture<Comp3508Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3508Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3508Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
