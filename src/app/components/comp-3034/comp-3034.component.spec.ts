import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3034Component } from './comp-3034.component';

describe('Comp3034Component', () => {
  let component: Comp3034Component;
  let fixture: ComponentFixture<Comp3034Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3034Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3034Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
