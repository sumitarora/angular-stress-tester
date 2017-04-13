import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2156Component } from './comp-2156.component';

describe('Comp2156Component', () => {
  let component: Comp2156Component;
  let fixture: ComponentFixture<Comp2156Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2156Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2156Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
