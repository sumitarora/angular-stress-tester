import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3555Component } from './comp-3555.component';

describe('Comp3555Component', () => {
  let component: Comp3555Component;
  let fixture: ComponentFixture<Comp3555Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3555Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3555Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
