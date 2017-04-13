import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4088Component } from './comp-4088.component';

describe('Comp4088Component', () => {
  let component: Comp4088Component;
  let fixture: ComponentFixture<Comp4088Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4088Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4088Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
