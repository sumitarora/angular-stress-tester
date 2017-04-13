import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4843Component } from './comp-4843.component';

describe('Comp4843Component', () => {
  let component: Comp4843Component;
  let fixture: ComponentFixture<Comp4843Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4843Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4843Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
