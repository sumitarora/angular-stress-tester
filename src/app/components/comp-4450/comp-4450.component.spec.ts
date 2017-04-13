import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4450Component } from './comp-4450.component';

describe('Comp4450Component', () => {
  let component: Comp4450Component;
  let fixture: ComponentFixture<Comp4450Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4450Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4450Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
