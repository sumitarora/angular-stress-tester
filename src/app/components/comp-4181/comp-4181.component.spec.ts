import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4181Component } from './comp-4181.component';

describe('Comp4181Component', () => {
  let component: Comp4181Component;
  let fixture: ComponentFixture<Comp4181Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4181Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4181Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
