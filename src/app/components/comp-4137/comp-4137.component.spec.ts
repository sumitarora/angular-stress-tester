import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4137Component } from './comp-4137.component';

describe('Comp4137Component', () => {
  let component: Comp4137Component;
  let fixture: ComponentFixture<Comp4137Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4137Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4137Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
