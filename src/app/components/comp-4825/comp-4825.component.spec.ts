import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4825Component } from './comp-4825.component';

describe('Comp4825Component', () => {
  let component: Comp4825Component;
  let fixture: ComponentFixture<Comp4825Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4825Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4825Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
