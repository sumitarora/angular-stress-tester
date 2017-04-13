import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4427Component } from './comp-4427.component';

describe('Comp4427Component', () => {
  let component: Comp4427Component;
  let fixture: ComponentFixture<Comp4427Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4427Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4427Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
