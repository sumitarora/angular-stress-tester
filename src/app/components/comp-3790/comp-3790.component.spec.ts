import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3790Component } from './comp-3790.component';

describe('Comp3790Component', () => {
  let component: Comp3790Component;
  let fixture: ComponentFixture<Comp3790Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3790Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3790Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
