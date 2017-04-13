import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4814Component } from './comp-4814.component';

describe('Comp4814Component', () => {
  let component: Comp4814Component;
  let fixture: ComponentFixture<Comp4814Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4814Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4814Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
