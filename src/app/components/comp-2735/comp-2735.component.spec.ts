import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2735Component } from './comp-2735.component';

describe('Comp2735Component', () => {
  let component: Comp2735Component;
  let fixture: ComponentFixture<Comp2735Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2735Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2735Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
