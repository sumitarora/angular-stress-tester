import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3631Component } from './comp-3631.component';

describe('Comp3631Component', () => {
  let component: Comp3631Component;
  let fixture: ComponentFixture<Comp3631Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3631Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3631Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
