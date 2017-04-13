import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3971Component } from './comp-3971.component';

describe('Comp3971Component', () => {
  let component: Comp3971Component;
  let fixture: ComponentFixture<Comp3971Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3971Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3971Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
