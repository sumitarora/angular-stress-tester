import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4494Component } from './comp-4494.component';

describe('Comp4494Component', () => {
  let component: Comp4494Component;
  let fixture: ComponentFixture<Comp4494Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4494Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4494Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
