import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4720Component } from './comp-4720.component';

describe('Comp4720Component', () => {
  let component: Comp4720Component;
  let fixture: ComponentFixture<Comp4720Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4720Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4720Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
