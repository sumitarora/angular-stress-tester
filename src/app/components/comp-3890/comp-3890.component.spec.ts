import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3890Component } from './comp-3890.component';

describe('Comp3890Component', () => {
  let component: Comp3890Component;
  let fixture: ComponentFixture<Comp3890Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3890Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3890Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
