import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3121Component } from './comp-3121.component';

describe('Comp3121Component', () => {
  let component: Comp3121Component;
  let fixture: ComponentFixture<Comp3121Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3121Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3121Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
