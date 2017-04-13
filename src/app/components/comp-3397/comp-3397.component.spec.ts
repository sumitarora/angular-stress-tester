import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3397Component } from './comp-3397.component';

describe('Comp3397Component', () => {
  let component: Comp3397Component;
  let fixture: ComponentFixture<Comp3397Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3397Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3397Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
