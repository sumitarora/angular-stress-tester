import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1287Component } from './comp-1287.component';

describe('Comp1287Component', () => {
  let component: Comp1287Component;
  let fixture: ComponentFixture<Comp1287Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1287Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1287Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
