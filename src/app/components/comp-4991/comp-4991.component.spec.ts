import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4991Component } from './comp-4991.component';

describe('Comp4991Component', () => {
  let component: Comp4991Component;
  let fixture: ComponentFixture<Comp4991Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4991Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4991Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
