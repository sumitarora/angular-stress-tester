import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3808Component } from './comp-3808.component';

describe('Comp3808Component', () => {
  let component: Comp3808Component;
  let fixture: ComponentFixture<Comp3808Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3808Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3808Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
