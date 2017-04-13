import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4252Component } from './comp-4252.component';

describe('Comp4252Component', () => {
  let component: Comp4252Component;
  let fixture: ComponentFixture<Comp4252Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4252Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4252Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
