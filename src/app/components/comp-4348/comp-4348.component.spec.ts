import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4348Component } from './comp-4348.component';

describe('Comp4348Component', () => {
  let component: Comp4348Component;
  let fixture: ComponentFixture<Comp4348Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4348Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4348Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
