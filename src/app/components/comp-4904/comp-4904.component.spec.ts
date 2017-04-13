import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4904Component } from './comp-4904.component';

describe('Comp4904Component', () => {
  let component: Comp4904Component;
  let fixture: ComponentFixture<Comp4904Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4904Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4904Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
