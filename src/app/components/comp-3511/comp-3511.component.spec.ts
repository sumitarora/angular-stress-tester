import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3511Component } from './comp-3511.component';

describe('Comp3511Component', () => {
  let component: Comp3511Component;
  let fixture: ComponentFixture<Comp3511Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3511Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3511Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
