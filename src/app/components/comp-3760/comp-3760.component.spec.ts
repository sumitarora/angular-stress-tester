import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3760Component } from './comp-3760.component';

describe('Comp3760Component', () => {
  let component: Comp3760Component;
  let fixture: ComponentFixture<Comp3760Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3760Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3760Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
