import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3297Component } from './comp-3297.component';

describe('Comp3297Component', () => {
  let component: Comp3297Component;
  let fixture: ComponentFixture<Comp3297Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3297Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3297Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
