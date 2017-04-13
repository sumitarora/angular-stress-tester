import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4460Component } from './comp-4460.component';

describe('Comp4460Component', () => {
  let component: Comp4460Component;
  let fixture: ComponentFixture<Comp4460Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4460Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4460Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
