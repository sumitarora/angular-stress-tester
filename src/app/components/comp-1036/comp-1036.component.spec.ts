import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1036Component } from './comp-1036.component';

describe('Comp1036Component', () => {
  let component: Comp1036Component;
  let fixture: ComponentFixture<Comp1036Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1036Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1036Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
