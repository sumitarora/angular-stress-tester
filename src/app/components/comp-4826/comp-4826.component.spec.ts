import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4826Component } from './comp-4826.component';

describe('Comp4826Component', () => {
  let component: Comp4826Component;
  let fixture: ComponentFixture<Comp4826Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4826Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4826Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
