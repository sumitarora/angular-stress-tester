import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4034Component } from './comp-4034.component';

describe('Comp4034Component', () => {
  let component: Comp4034Component;
  let fixture: ComponentFixture<Comp4034Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4034Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4034Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
