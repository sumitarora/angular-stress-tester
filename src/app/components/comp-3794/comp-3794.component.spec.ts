import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3794Component } from './comp-3794.component';

describe('Comp3794Component', () => {
  let component: Comp3794Component;
  let fixture: ComponentFixture<Comp3794Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3794Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3794Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
