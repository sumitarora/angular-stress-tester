import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4755Component } from './comp-4755.component';

describe('Comp4755Component', () => {
  let component: Comp4755Component;
  let fixture: ComponentFixture<Comp4755Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4755Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4755Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
