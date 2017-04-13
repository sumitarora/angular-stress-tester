import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4512Component } from './comp-4512.component';

describe('Comp4512Component', () => {
  let component: Comp4512Component;
  let fixture: ComponentFixture<Comp4512Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4512Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4512Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
