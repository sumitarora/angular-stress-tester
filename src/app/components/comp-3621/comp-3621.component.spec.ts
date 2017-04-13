import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3621Component } from './comp-3621.component';

describe('Comp3621Component', () => {
  let component: Comp3621Component;
  let fixture: ComponentFixture<Comp3621Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3621Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3621Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
