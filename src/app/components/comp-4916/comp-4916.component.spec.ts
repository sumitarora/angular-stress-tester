import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4916Component } from './comp-4916.component';

describe('Comp4916Component', () => {
  let component: Comp4916Component;
  let fixture: ComponentFixture<Comp4916Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4916Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4916Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
