import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4248Component } from './comp-4248.component';

describe('Comp4248Component', () => {
  let component: Comp4248Component;
  let fixture: ComponentFixture<Comp4248Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4248Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4248Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
