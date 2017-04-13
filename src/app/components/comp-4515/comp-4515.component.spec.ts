import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4515Component } from './comp-4515.component';

describe('Comp4515Component', () => {
  let component: Comp4515Component;
  let fixture: ComponentFixture<Comp4515Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4515Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4515Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
