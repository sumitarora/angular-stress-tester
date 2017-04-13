import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4177Component } from './comp-4177.component';

describe('Comp4177Component', () => {
  let component: Comp4177Component;
  let fixture: ComponentFixture<Comp4177Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4177Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4177Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
