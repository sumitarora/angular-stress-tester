import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3709Component } from './comp-3709.component';

describe('Comp3709Component', () => {
  let component: Comp3709Component;
  let fixture: ComponentFixture<Comp3709Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3709Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3709Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
