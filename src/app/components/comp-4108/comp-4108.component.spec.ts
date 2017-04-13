import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4108Component } from './comp-4108.component';

describe('Comp4108Component', () => {
  let component: Comp4108Component;
  let fixture: ComponentFixture<Comp4108Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4108Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4108Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
