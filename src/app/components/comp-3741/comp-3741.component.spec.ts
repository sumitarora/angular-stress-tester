import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3741Component } from './comp-3741.component';

describe('Comp3741Component', () => {
  let component: Comp3741Component;
  let fixture: ComponentFixture<Comp3741Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3741Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3741Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
