import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4979Component } from './comp-4979.component';

describe('Comp4979Component', () => {
  let component: Comp4979Component;
  let fixture: ComponentFixture<Comp4979Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4979Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4979Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
