import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2000Component } from './comp-2000.component';

describe('Comp2000Component', () => {
  let component: Comp2000Component;
  let fixture: ComponentFixture<Comp2000Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2000Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2000Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
