import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3385Component } from './comp-3385.component';

describe('Comp3385Component', () => {
  let component: Comp3385Component;
  let fixture: ComponentFixture<Comp3385Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3385Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3385Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
