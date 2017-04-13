import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4031Component } from './comp-4031.component';

describe('Comp4031Component', () => {
  let component: Comp4031Component;
  let fixture: ComponentFixture<Comp4031Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4031Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4031Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
