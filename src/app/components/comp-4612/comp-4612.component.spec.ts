import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4612Component } from './comp-4612.component';

describe('Comp4612Component', () => {
  let component: Comp4612Component;
  let fixture: ComponentFixture<Comp4612Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4612Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4612Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
