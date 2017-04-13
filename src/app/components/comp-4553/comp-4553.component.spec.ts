import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4553Component } from './comp-4553.component';

describe('Comp4553Component', () => {
  let component: Comp4553Component;
  let fixture: ComponentFixture<Comp4553Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4553Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4553Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
