import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3129Component } from './comp-3129.component';

describe('Comp3129Component', () => {
  let component: Comp3129Component;
  let fixture: ComponentFixture<Comp3129Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3129Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3129Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
