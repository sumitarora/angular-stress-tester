import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4160Component } from './comp-4160.component';

describe('Comp4160Component', () => {
  let component: Comp4160Component;
  let fixture: ComponentFixture<Comp4160Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4160Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4160Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
