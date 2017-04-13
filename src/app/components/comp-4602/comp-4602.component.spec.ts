import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4602Component } from './comp-4602.component';

describe('Comp4602Component', () => {
  let component: Comp4602Component;
  let fixture: ComponentFixture<Comp4602Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4602Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4602Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
