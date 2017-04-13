import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2898Component } from './comp-2898.component';

describe('Comp2898Component', () => {
  let component: Comp2898Component;
  let fixture: ComponentFixture<Comp2898Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2898Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2898Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
