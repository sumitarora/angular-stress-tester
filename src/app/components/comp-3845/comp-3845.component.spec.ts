import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3845Component } from './comp-3845.component';

describe('Comp3845Component', () => {
  let component: Comp3845Component;
  let fixture: ComponentFixture<Comp3845Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3845Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3845Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
