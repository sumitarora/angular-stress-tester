import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4706Component } from './comp-4706.component';

describe('Comp4706Component', () => {
  let component: Comp4706Component;
  let fixture: ComponentFixture<Comp4706Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4706Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4706Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
