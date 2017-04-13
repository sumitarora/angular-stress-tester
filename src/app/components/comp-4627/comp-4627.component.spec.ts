import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4627Component } from './comp-4627.component';

describe('Comp4627Component', () => {
  let component: Comp4627Component;
  let fixture: ComponentFixture<Comp4627Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4627Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4627Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
