import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2580Component } from './comp-2580.component';

describe('Comp2580Component', () => {
  let component: Comp2580Component;
  let fixture: ComponentFixture<Comp2580Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2580Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2580Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
