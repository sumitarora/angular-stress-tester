import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3087Component } from './comp-3087.component';

describe('Comp3087Component', () => {
  let component: Comp3087Component;
  let fixture: ComponentFixture<Comp3087Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3087Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3087Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
