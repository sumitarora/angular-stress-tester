import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3252Component } from './comp-3252.component';

describe('Comp3252Component', () => {
  let component: Comp3252Component;
  let fixture: ComponentFixture<Comp3252Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3252Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3252Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
