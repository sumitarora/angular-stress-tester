import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3421Component } from './comp-3421.component';

describe('Comp3421Component', () => {
  let component: Comp3421Component;
  let fixture: ComponentFixture<Comp3421Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3421Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3421Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
