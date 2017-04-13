import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3792Component } from './comp-3792.component';

describe('Comp3792Component', () => {
  let component: Comp3792Component;
  let fixture: ComponentFixture<Comp3792Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3792Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3792Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
