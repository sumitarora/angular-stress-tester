import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4793Component } from './comp-4793.component';

describe('Comp4793Component', () => {
  let component: Comp4793Component;
  let fixture: ComponentFixture<Comp4793Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4793Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4793Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
