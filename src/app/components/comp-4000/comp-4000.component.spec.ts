import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4000Component } from './comp-4000.component';

describe('Comp4000Component', () => {
  let component: Comp4000Component;
  let fixture: ComponentFixture<Comp4000Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4000Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4000Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
