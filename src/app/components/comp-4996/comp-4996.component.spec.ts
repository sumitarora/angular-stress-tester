import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4996Component } from './comp-4996.component';

describe('Comp4996Component', () => {
  let component: Comp4996Component;
  let fixture: ComponentFixture<Comp4996Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4996Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4996Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
