import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4874Component } from './comp-4874.component';

describe('Comp4874Component', () => {
  let component: Comp4874Component;
  let fixture: ComponentFixture<Comp4874Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4874Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4874Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
