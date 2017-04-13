import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4794Component } from './comp-4794.component';

describe('Comp4794Component', () => {
  let component: Comp4794Component;
  let fixture: ComponentFixture<Comp4794Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4794Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4794Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
