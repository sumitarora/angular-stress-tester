import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3984Component } from './comp-3984.component';

describe('Comp3984Component', () => {
  let component: Comp3984Component;
  let fixture: ComponentFixture<Comp3984Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3984Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3984Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
