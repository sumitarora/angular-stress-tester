import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2683Component } from './comp-2683.component';

describe('Comp2683Component', () => {
  let component: Comp2683Component;
  let fixture: ComponentFixture<Comp2683Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2683Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2683Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
