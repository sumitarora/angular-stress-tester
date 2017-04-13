import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4722Component } from './comp-4722.component';

describe('Comp4722Component', () => {
  let component: Comp4722Component;
  let fixture: ComponentFixture<Comp4722Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4722Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4722Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
