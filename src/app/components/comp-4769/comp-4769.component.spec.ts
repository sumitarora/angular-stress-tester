import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4769Component } from './comp-4769.component';

describe('Comp4769Component', () => {
  let component: Comp4769Component;
  let fixture: ComponentFixture<Comp4769Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4769Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4769Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
