import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4136Component } from './comp-4136.component';

describe('Comp4136Component', () => {
  let component: Comp4136Component;
  let fixture: ComponentFixture<Comp4136Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4136Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4136Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
