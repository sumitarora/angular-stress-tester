import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2286Component } from './comp-2286.component';

describe('Comp2286Component', () => {
  let component: Comp2286Component;
  let fixture: ComponentFixture<Comp2286Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2286Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2286Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
