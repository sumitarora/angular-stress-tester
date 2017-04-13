import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3951Component } from './comp-3951.component';

describe('Comp3951Component', () => {
  let component: Comp3951Component;
  let fixture: ComponentFixture<Comp3951Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3951Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3951Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
