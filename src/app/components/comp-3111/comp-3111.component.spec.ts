import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3111Component } from './comp-3111.component';

describe('Comp3111Component', () => {
  let component: Comp3111Component;
  let fixture: ComponentFixture<Comp3111Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3111Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3111Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
