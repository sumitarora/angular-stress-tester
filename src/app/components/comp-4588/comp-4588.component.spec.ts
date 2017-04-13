import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4588Component } from './comp-4588.component';

describe('Comp4588Component', () => {
  let component: Comp4588Component;
  let fixture: ComponentFixture<Comp4588Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4588Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4588Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
