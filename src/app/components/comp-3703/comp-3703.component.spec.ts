import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3703Component } from './comp-3703.component';

describe('Comp3703Component', () => {
  let component: Comp3703Component;
  let fixture: ComponentFixture<Comp3703Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3703Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3703Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
