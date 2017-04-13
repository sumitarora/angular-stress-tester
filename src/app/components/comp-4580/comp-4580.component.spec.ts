import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4580Component } from './comp-4580.component';

describe('Comp4580Component', () => {
  let component: Comp4580Component;
  let fixture: ComponentFixture<Comp4580Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4580Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4580Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
