import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3618Component } from './comp-3618.component';

describe('Comp3618Component', () => {
  let component: Comp3618Component;
  let fixture: ComponentFixture<Comp3618Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3618Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3618Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
