import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3710Component } from './comp-3710.component';

describe('Comp3710Component', () => {
  let component: Comp3710Component;
  let fixture: ComponentFixture<Comp3710Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3710Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3710Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
