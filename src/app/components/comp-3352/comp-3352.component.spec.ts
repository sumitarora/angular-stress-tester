import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3352Component } from './comp-3352.component';

describe('Comp3352Component', () => {
  let component: Comp3352Component;
  let fixture: ComponentFixture<Comp3352Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3352Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3352Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
