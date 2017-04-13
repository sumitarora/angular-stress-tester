import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4735Component } from './comp-4735.component';

describe('Comp4735Component', () => {
  let component: Comp4735Component;
  let fixture: ComponentFixture<Comp4735Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4735Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4735Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
