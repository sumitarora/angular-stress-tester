import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4398Component } from './comp-4398.component';

describe('Comp4398Component', () => {
  let component: Comp4398Component;
  let fixture: ComponentFixture<Comp4398Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4398Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4398Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
