import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3930Component } from './comp-3930.component';

describe('Comp3930Component', () => {
  let component: Comp3930Component;
  let fixture: ComponentFixture<Comp3930Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3930Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3930Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
