import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3813Component } from './comp-3813.component';

describe('Comp3813Component', () => {
  let component: Comp3813Component;
  let fixture: ComponentFixture<Comp3813Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3813Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3813Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
