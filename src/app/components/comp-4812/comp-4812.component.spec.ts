import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4812Component } from './comp-4812.component';

describe('Comp4812Component', () => {
  let component: Comp4812Component;
  let fixture: ComponentFixture<Comp4812Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4812Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4812Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
