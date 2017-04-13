import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3627Component } from './comp-3627.component';

describe('Comp3627Component', () => {
  let component: Comp3627Component;
  let fixture: ComponentFixture<Comp3627Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3627Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3627Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
